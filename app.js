/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/
let num1 = '';
let num2 = '';
let operator = '';
let resultDisplay = 0;

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
        if (operator === ''){
          // console.dir(event.target)
          //when there is no operator, 
          // add the target number to displayText
          display.innerText += event.target.innerText
          // console.log(display.innerText)
          // assign the first num to displays innerText
          num1 = display.innerText
        } else {
          // when there IS an operator, 
          // add the target number to display text
          display.innerText += event.target.innerText
          // because there is num1, assign second number
          num2 = display.innerText
        }
      
      
      };
      if (event.target.classList.contains('operator')){
        operator = event.target.innerText
        display.innerText = '';
        if (operator === 'C') {
        
            resultDisplay = 0
            num1 = '';
            num2 = '';
            operator = '';
        }
        console.log(operator)
      }
        // code to dictate operations
      if (event.target.classList.contains('equals')){
        console.log('hi')
        calculate() //operate on num1 num2 the operation and assign result to resultDisplay
        display.innerText = resultDisplay
      }
        

      
     
      
      if (event.target.classList === false);
        calculate()
      console.log(event.target.classList.contains('number'))
    });
    //As a user, I want to be able to select numbers so that I can perform operations with them.
    //when an operator is clicked, the calculator should stop displaying the clicks for num1 and begin num2
    // button.operator =  
  });
  
  
  
  //keep track of every number before an operator is selected
  //if operator is selected, store it
  //any number after operator is num2
  //when equals is selected run calculate()

/*-------------------------------- Functions --------------------------------*/




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
