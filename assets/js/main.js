document.addEventListener("DOMContentLoaded", () => {
    // ==================================================
    // Scroll Reveal Animation
    // ==================================================

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.remove("opacity-0", "translate-y-8");
                entry.target.classList.add("opacity-100");

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.1,
        }
    );

    document.querySelectorAll("section").forEach((section) => {
        section.classList.add(
            "opacity-0",
            "translate-y-8",
            "transition",
            "duration-700"
        );

        observer.observe(section);
    });

    // ==================================================
    // Footer Copyright Year
    // ==================================================

    const currentYear = document.getElementById("current-year");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // ==================================================
    // Contact Form Submission
    // ==================================================

    const GOOGLE_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxKCLZn827cEX5U7tToweWbj9tAP3B8B4_3SKUV-vzEQDLjEVY0r-sFjMZJVKVSm9o3/exec";

    const form = document.forms["submit-to-google-sheet"];
    const message = document.getElementById("msg");

    if (!form || !message) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const originalButtonContent = submitButton.innerHTML;

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        submitButton.disabled = true;
        submitButton.innerHTML = `
            Sending...
            <span class="material-symbols-outlined" aria-hidden="true">
                hourglass_top
            </span>
        `;

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    mode: "no-cors",
                    body: new FormData(form),
                });

                // IMPORTANT: no-cors means we cannot read response
                console.log("Form submitted to Google Sheets");

                // Assume success (this is normal for Google Apps Script)
                message.textContent = "✓ Message sent successfully!";
                message.className = "mt-md text-center font-body-md text-green-600";

                form.reset();

        } catch (error) {
            console.error("Contact form error:", error);

            message.textContent =
                "Unable to send your message. Please try again.";
            message.className =
                "mt-md text-center font-body-md text-red-600";

        } finally {
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonContent;

            setTimeout(() => {
                message.textContent = "";
                message.className = "mt-md text-center font-body-md";
            }, 5000);
        }
    });
});