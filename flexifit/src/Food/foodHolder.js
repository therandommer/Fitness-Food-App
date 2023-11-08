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
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));