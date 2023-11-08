//--- Variables ---
let allItems = []; //all food data in an array here
let displayedItems = []; //array of menu items to chose
let displayedNumber = 10; //number of items to render on the screen at one

let totalCalories = 0;
let totalPrice = 0;

let isVegetarian = false;
let isGluten = false;
let isLactose = false;
let highCarb = false;

//--- Functions ---
document.addEventListener("DOMContentLoaded", function () {
    const foodList = document.getElementById("food-list");
    const foodNameInput = document.getElementById("food-name");
    const addButton = document.getElementById("add-button");

    // Add event listener to the "Add Item" button
    addButton.addEventListener("click", function () {
        const foodName = foodNameInput.value.trim();

        if (foodName !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = foodName;
            foodList.appendChild(listItem);
            foodNameInput.value = "";
        }
    });

    foodList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-button")) {
            const listItem = event.target.parentElement;
            foodList.removeChild(listItem);
        }
    });
});