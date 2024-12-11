// This is for product list of cakes
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Modern Shopping Website with sleek design and user-friendly interface">
    <title>ShopEase - Your Modern Online Cake Store</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
        }

        header {
            background: #3a3a3a;
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        header .logo {
            font-size: 1.5rem;
            font-weight: bold;
        }

        header nav ul {
            list-style: none;
            display: flex;
        }

        header nav ul li {
            margin-left: 20px;
        }

        header nav ul li a {
            text-decoration: none;
            color: white;
            font-size: 1rem;
        }

        .hero {
            background: url('https://via.placeholder.com/1500x600') no-repeat center center/cover;
            color: white;
            height: 400px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        .hero h1 {
            font-size: 2.5rem;
        }

        .hero p {
            margin: 10px 0 20px;
            font-size: 1.2rem;
        }

        .hero button {
            background: #ff6347;
            color: white;
            border: none;
            padding: 10px 20px;
            font-size: 1rem;
            cursor: pointer;
        }

        .categories {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .categories h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .category-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }

        .category-card {
            background: white;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            text-align: center;
            padding: 20px;
        }

        .category-card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 5px;
        }

        .category-card h3 {
            margin: 10px 0;
            font-size: 1.2rem;
        }

        .category-card a {
            text-decoration: none;
            color: white;
            background: #3a3a3a;
            padding: 10px 20px;
            display: inline-block;
            margin-top: 10px;
            border-radius: 5px;
        }

        footer {
            background: #3a3a3a;
            color: white;
            padding: 1rem 2rem;
            text-align: center;
        }

        footer p {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <header>
        <div class="logo">ShopEase</div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#categories">Categories</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section class="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Discover the finest cakes for every occasion.</p>
        <button>Shop Now</button>
    </section>

    <section class="categories" id="categories">
        <h2>Our Cake Categories</h2>
        <div class="category-list">
            <div class="category-card">
                <img src="https://via.placeholder.com/300x200" alt="Wedding Cakes">
                <h3>Wedding Cakes</h3>
                <a href="wedding-cakes.html">View More</a>
            </div>
            <div class="category-card">
                <img src="https://via.placeholder.com/300x200" alt="Birthday Cakes">
                <h3>Birthday Cakes</h3>
                <a href="birthday-cakes.html">View More</a>
            </div>
            <div class="category-card">
                <img src="https://via.placeholder.com/300x200" alt="Anniversary Cakes">
                <h3>Anniversary Cakes</h3>
                <a href="anniversary-cakes.html">View More</a>
            </div>
            <div class="category-card">
                <img src="https://via.placeholder.com/300x200" alt="Graduation Cakes">
                <h3>Graduation Cakes</h3>
                <a href="graduation-cakes.html">View More</a>
            </div>
            <div class="category-card">
                <img src="https://via.placeholder.com/300x200" alt="Congratulation Cakes">
                <h3>Congratulation Cakes</h3>
                <a href="congratulation-cakes.html">View More</a>
            </div>
            <div class="category-card">
                <img src="https://via.placeholder.com/300x200" alt="Holiday Cakes">
                <h3>Holiday Cakes</h3>
                <a href="holiday-cakes.html">View More</a>
            </div>
        </div>
    </section>

    <footer>
        <p>&copy; 2024 ShopEase. All Rights Reserved.</p>
    </footer>
</body>
</html>
