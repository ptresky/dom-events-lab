/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let num1 = 0;
let num2 = 0;
let operator = '';
let resultDisplay = 0;

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This is where you would want to add control flow
      // You need to direct the flow of you code based on which button is pressed
      // HINT: think if statements

      // You can achieve this be utilizing the classes of the DOM elements
      // The event.target.classList.contains() you have a few lines down
      // This method will return true or false 
      if (event.target.classList.contains('number')){
        display.innerText = ''};
      if (event.target.classList.contains('operator')){

      }
        // code to dictate operations
      if (event.target.classList.contains('equal')){
        calculate()}

      
      
        console.dir(event.target.classList);
      console.dir(display.innerText + event.target.innerText)
      display.innerText = display.innerText + event.target.innerText
      if (event.target.classList === false);
        calculate()
      console.log(event.target.classList.contains('number'))
    });
    //As a user, I want to be able to select numbers so that I can perform operations with them.
    //when an operator is clicked, the calculator should stop displaying the clicks for num1 and begin num2
    button.operator =  
  });
  if (operator = 'C');
    clearDisplay()
  
  

/*-------------------------------- Functions --------------------------------*/


const calculate = () => {
    if (operator === '+') {
        resultDisplay = (num1 + num2)
    } else
    if (operator === '-') {
        resultDisplay = (num1 - num2)
    } else
    if (operator === '*') {
        resultDisplay = (num1 * num2)
    } else
    if (operator === '/') {
        resultDisplay = (num1 /num2)
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

/* const display = document.querySelector('.display');
const button.number(input){
display.value += input;
}

const clearDisplay(){
display.valye = '';
}

const calculate(){
try(display.valye - eval(display.valye);
)
switch(error){
display.value = "error"};

}
*/
