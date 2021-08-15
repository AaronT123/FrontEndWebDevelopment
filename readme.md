# CTEC3905 Assignment

This repository contains a 4 page ecommerce site created by Aaron Turton - P17228395.

## HTML:
The `index.html` file is the homepage and starting page for the website.
The `products.html` is a page for displaying all products, the first product "wax burner" is linked to `product-info.html` and the rest are placeholders.
The `product-info.html` displays the information of a product "wax burner", clicking "Add to cart" button will add the item to the cart.
The `cart.html` displays the cart of the user, this will have two items in by default, and will display the wax burner if the user has added it.

## CSS:
The `css/styles.css` file contains all css used on the website, creating responsive views to adapt to user screen size for every page. This is created with a mobile-first approach.

## JavaScript:
The `js/scripts.js` file contains base javascript for the site including navbar, adding to cart / local storage functionality.
The `js/cart.js` file contains all code handling the cart functionality of the `cart.html` page. This includes functionality for changing quantities of items in the cart, removing items, updating the cart total when a change is made to the carts items, and handling the adding of the "wax burner" item to the cart through use of local storage and data being passed through pages. I learned how to create this functionality from lab sessions and a YouTube video (linked below) and have adapted it for my own site with additional functionality.

## Images:
The `images` folder contains all images used in the project. These include product images, social media logos and a favicon logo for the site.

## External Learning Resources
Shopping Cart: https://youtu.be/YeFzkC2awTM

##  Integrated Development Environment (IDE)
I used Visual Studio over Atom as I prefer it. This is why there is a `.vs` folder.

##  GitHub
With it being a solo project, I mainly committed to master, using branches for testing new functionality such as the cart system.
