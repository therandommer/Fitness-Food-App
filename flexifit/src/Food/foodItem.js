//--- Variables ---
let foodCategories = [];

let price = 0;
let calories = 0;
let rating = 0;
let foodName = "";
let foodDescription = "";
let previewImage;
let largeImage;

//--- Functions ---
const foodItems = [
    { name: "Pizza", price: 10.99 },
    { name: "Burger", price: 8.99 },
    { name: "Salad", price: 5.99 },
    { name: "Pasta", price: 12.99 },
    { name: "Ice Cream", price: 4.99 }
];

const foodList = document.getElementById("food-items");
const cartList = document.getElementById("cart-items");
const totalPrice = document.getElementById("total-price");

// Looping through each food item and creating the HTML associated to each element
foodItems.forEach(item => {
    const foodItem = document.createElement("li");
    foodItem.classList.add("food-item");
    foodItem.innerHTML = `
        <h2>${item.name}</h2>
        <p>Price: $${item.price.toFixed(2)}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
    `;
    foodList.appendChild(foodItem);
});

let cart = [];
let cartTotal = 0.0;


function addToCart(name, price) {
    cart.push({ name, price });
    cartTotal += price;

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
        <span>${name}</span>
        <span>$${price.toFixed(2)}</span>
    `;
    cartList.appendChild(cartItem);

    totalPrice.textContent = `$${cartTotal.toFixed(2)}`;
}





