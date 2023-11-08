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
<<<<<<< HEAD
var selectedStarter = {
    dish: "(None)",
    price: 0
  };
  var selectedMain = {
    dish: "(None)",
    price: 0
  };
  var selectedDessert = {
    dish: "(None)",
    price: 0
  };
  var starter = {
    firstDish: "Salad",
    firstDishPrice: 15,
    secondDish: "Soup",
    secondDishPrice: 7,
    thirdDish: "Fish rolls",
    thirdDishPrice: 12
  };
=======
const foodItems = [
    { name: "Pizza", price: 10.99 },
    { name: "Burger", price: 8.99 },
    { name: "Salad", price: 5.99 },
    { name: "Pasta", price: 12.99 },
    { name: "Ice Cream", price: 4.99 }
];
>>>>>>> da47820be3b38343a78e2b0f99e3fee95920fe6a

  var main = {
    firstDish: "Steak",
    firstDishPrice: 17,
    secondDish: "Salmon",
    secondDishPrice: 12,
    thirdDish: "Rissotto",
    thirdDishPrice: 9
  };

<<<<<<< HEAD
  var dessert = {
    firstDish: "Sorbet",
    firstDishPrice: 4,
    secondDish: "Fruit salad",
    secondDishPrice: 6,
    thirdDish: "Apple pie",
    thirdDishPrice: 5
  };
=======
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
>>>>>>> da47820be3b38343a78e2b0f99e3fee95920fe6a

  function total() {
    return selectedStarter.price + selectedMain.price + selectedDessert.price;
  }

<<<<<<< HEAD
  function selectedStarterFnc(dish, price) {
    selectedStarter.price = price;
    selectedStarter.dish = dish;
    $("#total").html(total());
    return dish + "(" + price + ")";
  }
=======

function addToCart(name, price) {
    cart.push({ name, price });
    cartTotal += price;
>>>>>>> da47820be3b38343a78e2b0f99e3fee95920fe6a

  function selectedMainFnc(dish, price) {
    selectedMain.price = price;
    selectedMain.dish = dish;
    $("#total").html(total());
    return dish + "(" + price + ")";
  }

  function selectedDessertFnc(dish, price) {
    selectedDessert.price = price;
    selectedDessert.dish = dish;
    $("#total").html(total());
    return dish + "(" + price + ")";
  }

  // Instantiating HTML Button Elements
  // Starter Elements
  document.getElementById("btStarter1").value =
    starter.firstDish + ": " + starter.firstDishPrice;

  document.getElementById("btStarter2").value =
    starter.secondDish + ": " + starter.secondDishPrice;

  document.getElementById("btStarter3").value =
    starter.thirdDish + ": " + starter.thirdDishPrice;

  // Main Elements
  document.getElementById("btMain1").value =
    main.firstDish + ": " + main.firstDishPrice;

  document.getElementById("btMain2").value =
    main.secondDish + ": " + main.secondDishPrice;

  document.getElementById("btMain3").value =
    main.thirdDish + ": " + main.thirdDishPrice;

  // Dessert Elements
  document.getElementById("btDessert1").value =
    dessert.firstDish + ": " + dessert.firstDishPrice;

  document.getElementById("btDessert2").value =
    dessert.secondDish + ": " + dessert.secondDishPrice;

  document.getElementById("btDessert3").value =
    dessert.thirdDish + ": " + dessert.thirdDishPrice;

  // Your Order: Elements
  document.getElementById("selectedStarter").innerHTML =
    selectedStarter.dish + " (" + selectedStarter.price + ")";

  document.getElementById("selectedMain").innerHTML =
    selectedMain.dish + " (" + selectedMain.price + ")";

  document.getElementById("selectedDessert").innerHTML =
    selectedDessert.dish + " (" + selectedDessert.price + ")";

  // Functions (JQuery)
  // Main menu onClicks handler
  $("#btMenu").click(function() {
    $("#liMainMenu").toggle("slow");
  });

  $("#btStarter").click(function() {
    $("#liStarter").toggle("slow", function() {
      if ($(this).css("display") == "none") {
        $("#btStarter").css("background-color", "black");
      } else {
        $("#btStarter").css("background-color", "blue");
      }
    });
  });

  $("#btMain").click(function() {
    $("#liMain").toggle("slow", function() {
      if ($(this).css("display") == "none") {
        $("#btMain").css("background-color", "black");
      } else {
        $("#btMain").css("background-color", "blue");
      }
    });
  });

  $("#btDessert").click(function() {
    $("#liDessert").toggle("slow", function() {
      if ($(this).css("display") == "none") {
        $("#btDessert").css("background-color", "black");
      } else {
        $("#btDessert").css("background-color", "blue");
      }
    });
  });

  // Starter onClicks
  $("#btStarter1").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.firstDish, starter.firstDishPrice));
  });

  $("#btStarter2").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.secondDish, starter.secondDishPrice));
  });

  $("#btStarter3").click(function() {
    $("#liStarter").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedStarter").html(selectedStarterFnc(starter.thirdDish, starter.thirdDishPrice));
  });

  // Main onClicks
  $("#btMain1").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.firstDish, main.firstDishPrice));
  });

  $("#btMain2").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.secondDish, main.secondDishPrice));
  });

  $("#btMain3").click(function() {
    $("#liMain").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedMain").html(selectedMainFnc(main.thirdDish, main.thirdDishPrice));
  });

  // Dessert onClicks
  $("#btDessert1").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.firstDish, dessert.firstDishPrice));
  });

  $("#btDessert2").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.secondDish, dessert.secondDishPrice));
  });

  $("#btDessert3").click(function() {
    $("#liDessert").children("li").children("input").css("background-color", "red");
    $(this).css("background-color", "green");
    $("#selectedDessert").html(selectedDessertFnc(dessert.thirdDish, dessert.thirdDishPrice));
  });