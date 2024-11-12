// Select all the relevant elements
const cartItems = document.querySelectorAll('.cart-item');
const totalPriceElement = document.querySelector('#total-price');

// Function to update total price
function updateTotalPrice() {
    let total = 0;
    cartItems.forEach(item => {
        const price = parseFloat(item.querySelector('.item-price').textContent);
        const quantity = parseInt(item.querySelector('.item-quantity').value);
        total += price * quantity;
    });
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to increase quantity
function increaseQuantity(item) {
    const quantityInput = item.querySelector('.item-quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
}

// Function to decrease quantity
function decreaseQuantity(item) {
    const quantityInput = item.querySelector('.item-quantity');
    if (parseInt(quantityInput.value) > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
    updateTotalPrice();
}

// Function to delete item
function deleteItem(item) {
    item.remove();
    updateTotalPrice();
}

// Function to toggle heart (like/unlike)
function toggleLike(item) {
    const heartButton = item.querySelector('.heart-button');
    heartButton.classList.toggle('liked');
}

// Add event listeners for quantity, delete, and like
cartItems.forEach(item => {
    item.querySelector('.increase-btn').addEventListener('click', () => increaseQuantity(item));
    item.querySelector('.decrease-btn').addEventListener('click', () => decreaseQuantity(item));
    item.querySelector('.delete-btn').addEventListener('click', () => deleteItem(item));
    item.querySelector('.heart-button').addEventListener('click', () => toggleLike(item));
});

// Initial total price calculation
updateTotalPrice();
