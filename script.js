/**********************************************
 * Part 1: Mastering JavaScript Basics
 **********************************************/
let userName = "Braytone"; // variable declaration
let userAge = 20;          // integer
let isAdult = userAge >= 18; // boolean expression

// Conditional statement
if (isAdult) {
  document.getElementById("greeting").textContent =
    `Hello ${userName}, you are ${userAge} years old and an adult.`;
} else {
  document.getElementById("greeting").textContent =
    `Hello ${userName}, you are ${userAge} years old and not yet an adult.`;
}

/**********************************************
 * Part 2: JavaScript Functions
 **********************************************/
// Function 1: Calculate total with tax
function calculateTotal(price, quantity) {
  let taxRate = 0.1; // 10% tax
  return (price * quantity) * (1 + taxRate);
}

// Function 2: Toggle element visibility
function toggleMessage() {
  let msg = document.getElementById("toggleMessage");
  if (msg.style.display === "none") {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }
}

// Event listeners for functions
document.getElementById("calcTotalBtn").addEventListener("click", () => {
  let result = calculateTotal(50, 3); // sample values
  document.getElementById("totalResult").textContent =
    `Total (with tax): $${result}`;
});

document.getElementById("toggleBtn").addEventListener("click", toggleMessage);

/**********************************************
 * Part 3: JavaScript Loops
 **********************************************/
// Example 1: For loop to populate a list
let fruits = ["Apple", "Banana", "Cherry", "Date"];
let list = document.getElementById("loopList");

for (let i = 0; i < fruits.length; i++) {
  let li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}

// Example 2: Countdown using while loop
let count = 5;
let countdownText = "";
while (count > 0) {
  countdownText += count + "... ";
  count--;
}
document.getElementById("countdown").textContent = countdownText + "Go!";

/**********************************************
 * Part 4: DOM Manipulation
 **********************************************/
// Interaction 1: Change text content
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("dynamicText").textContent =
    "The text has been changed dynamically!";
});

// Interaction 2: Add a new list item
document.getElementById("addItemBtn").addEventListener("click", () => {
  let newItem = document.createElement("li");
  newItem.textContent = "New dynamic item";
  document.getElementById("itemList").appendChild(newItem);
});

// Interaction 3: Change background color
document.getElementById("colorBtn").addEventListener("click", () => {
  document.body.style.background =
    document.body.style.background === "lightblue" ? "#f5f5f5" : "lightblue";
});
