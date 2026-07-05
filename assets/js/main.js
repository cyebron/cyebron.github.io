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
    "https://script.google.com/macros/s/AKfycbz-8PbzyupYTOOqWBnxbkS4i1TnvWovAiFeWd2QfvaAu1c9d9mGaaW7FPVyzONhmsOsfQ/exec"; // <-- CHANGE THIS TO YOUR GOOGLE APP SCRIPT WEB APP

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
        <span class="material-symbols-outlined">
            hourglass_top
        </span>
    `;

    try {

        const response = await fetch(GOOGLE_SCRIPT_URL, {

            method: "POST",

            body: new FormData(form)

        });

        const result = await response.json();

        if (result.success) {

            message.textContent =
                "✓ Message sent successfully!";

            message.className =
                "mt-md text-center font-body-md text-green-600";

            form.reset();

        } else {

            throw new Error(result.error);

        }

    } catch (error) {

        console.error(error);

        message.textContent =
            "Unable to send your message.";

        message.className =
            "mt-md text-center font-body-md text-red-600";

    } finally {

        submitButton.disabled = false;

        submitButton.innerHTML = originalButtonContent;

        setTimeout(() => {

            message.textContent = "";

            message.className =
                "mt-md text-center font-body-md";

        }, 5000);

    }

});

});

/*
=========================================================
GOOGLE APPS SCRIPT SETUP (FREE CONTACT FORM BACKEND)
=========================================================

STEP 1
Create a new Google Sheet.

STEP 2
Rename the first sheet to:
Sheet1

STEP 3
Create these columns in Row 1:

Timestamp | Name | Email | Subject | Message

---------------------------------------------------------

STEP 4
Open the Apps Script editor.

Google Sheet
→ Extensions
→ Apps Script

---------------------------------------------------------

STEP 5
Replace the default Code.gs with your doPost() script.

Example:

function doPost(e) {
    ...
}

---------------------------------------------------------

STEP 6
Replace this line with your own Gmail:

to: "your-email@gmail.com"

This is where portfolio inquiries will be sent.

---------------------------------------------------------

STEP 7
Save the project.

Ctrl + S

(Optional)
Rename the project to:
Portfolio Contact Form

---------------------------------------------------------

STEP 8
Deploy the project.

Deploy
→ New Deployment
→ Web App

Configure:

Execute as:
Me

Who has access:
Anyone

Click:
Deploy

---------------------------------------------------------

STEP 9
Authorize the application.

If Google shows:

"Google hasn't verified this app"

Click:

Advanced
→ Go to (unsafe)

This is normal because the script is your own.

---------------------------------------------------------

STEP 10
Copy the Web App URL.

Example:

https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxx/exec

---------------------------------------------------------

STEP 11
Paste the URL into your JavaScript.

const GOOGLE_SCRIPT_URL =
"https://script.google.com/macros/s/xxxxxxxxxxxxxxxxxxxxxxxx/exec";

---------------------------------------------------------

STEP 12
Test the contact form.

Run your website.

Fill in:

✓ Name
✓ Email
✓ Subject
✓ Message

Click:

Send Message

---------------------------------------------------------

Expected Result

✔ New row added to Google Sheets
✔ Email notification received
✔ Success message displayed on website

=========================================================
*/