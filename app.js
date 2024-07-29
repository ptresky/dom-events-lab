/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');

//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//operators = ['+', '-', '*', '/', '=']



/*-------------------------------- Variables --------------------------------*/
let userSelect;
let msg;

//allow the user to click a series of buttons to form an equation. 
//allow the user to click equals to solve the equation
//allow 'C' to clear the calculator to start over
//the sequence of clicked buttons should appear on the div "display"


/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');

const displayElement = document.querySelector('#display');


/*-------------------------------- Functions --------------------------------*/
//display
//solve
//clear
//add
//subtract
//multiply
//divide

const display() {

}
const clearDisplay = () => {
    msg = ''; //clear display 
}

/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value would go here...
    });
  });

  
  
document.querySelector('#clearButton').addEventListener('click', resetCalculator)


