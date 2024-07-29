/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');


/*-------------------------------- Variables --------------------------------*/
let display = document.querySelector('display')
let num1 = 0;
let num2 = 0;
let operator = '';

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });
  

/*-------------------------------- Functions --------------------------------*/


const solve = () => {
    if (operator === '+') {
        (num1 + num2)
    } 
    if (operator === '-') {
        (num1 - num2)
    }
    if (operator === '*') {
        (num1 * num2)
    }
    if (operator === '/') {
        (num1 /num2)
    }
}
const clearDisplay = () => {
    display.value = '';
}
/* 
capture the value of one number 
select an operator
capture the value of a second number
solve the equation 
clear the display
*/