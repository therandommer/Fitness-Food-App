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
import React, { Component } from 'react';

class FoodMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        { name: 'Burger', price: 8.99 },
        { name: 'Pizza', price: 10.99 },
        { name: 'Pasta', price: 12.99 },
        { name: 'Salad', price: 6.99 },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>Food Menu</h1>
        <ul>
          {this.state.menuItems.map((item, index) => (
            <li key={index}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FoodMenu;