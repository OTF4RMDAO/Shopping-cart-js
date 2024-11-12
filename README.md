# SHOPPING CART PROJECT

 This project is an interactive shopping cart web application built with HTML, CSS, Bootstrap, Font Awesome, and JavaScript. Users can add products to the cart, adjust quantities, remove items, and "like" items with a heart button. The total price updates dynamically based on item quantities.

# FEATURES

* Product Listing: Displays a set of products, each with an image, title, description, price, and cart controls.

* Quantity Adjustments: Users can increase or decrease item quantities using + and - buttons.

* Total Price Calculation: The total price updates automatically when items are added, removed, or their           quantities are adjusted.

* Item Removal: Each product has a delete button to remove it from the cart.

* "Like" Feature: Users can "like" products by clicking a heart button.

# PROJECT STRUCTURE

.
├── index.html       # Main HTML file containing the structure of the page
├── style/
│   └── style.css    # CSS file for custom styling
├── js/
│   └── script.js    # JavaScript file for interactive functionality
└── assets/          # Folder containing product images


# USAGE

* Adjust Quantity: Use the + and - buttons to increase or decrease the quantity of items in the cart.

* Remove Item: Click on the "Delete" button to remove an item from the cart.

* Like Item: Click on the heart button to like an item.

* View Total Price: The total price updates dynamically at the bottom of the cart based on the items and their quantities.

# CODE OVERVIEW
 HTML (index.html)
* Defines the page layout and structure.
* Each product is contained in a div with controls for adjusting quantities, deleting items, and liking items.

 CSS (style/style.css)
* Adds custom styles to the shopping cart interface.
* Uses Bootstrap for layout and Font Awesome for icons.

 JavaScript (js/script.js)
Controls the interactive functionality:
* Quantity Adjustment: Updates the item count and total price.
* Delete Function: Removes an item from the cart and updates the total price.
* Like Function: Allows users to "like" items by changing the heart icon color.
* Total Price Calculation: Calculates the total based on quantities and updates it in real-time.

# Dependencies
 Bootstrap: For layout and responsive design.
 Font Awesome: For icons used in quantity adjustment, delete, and like features.