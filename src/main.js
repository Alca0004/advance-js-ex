// Import the exercise1 and exercise2 functions
import { exercise1 } from "./exercise1.js";
import { exercise2 } from "./exercise2.js";
import { exercise3 } from "./exercise3.js";
import { exercise4 } from "./exercise4.js";

// Get the buttons for each exercise
const button1 = document.getElementById("exercise1-button");
const button2 = document.getElementById("exercise2-button");
const button3 = document.getElementById("exercise3-button");
const button4 = document.getElementById("exercise4-button");

// Add event listeners to both buttons
button1.addEventListener("click", exercise1); // Trigger Exercise 1 on button click
button2.addEventListener("click", exercise2); // Trigger Exercise 2 on button click
button3.addEventListener("click", exercise3); // Trigger Exercise 2 on button click
button4.addEventListener("click", exercise4); // Trigger Exercise 2 on button click
