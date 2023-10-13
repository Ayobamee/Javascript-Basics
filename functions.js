const number1 = 10;
const number2 = 8;
const sum = add(number1, number2); //this calls the function to add
function add(a, b) {
  return a + b;
}
console.log(`The sum of ${number1} and ${number2} is ${sum}.`);

//Arrow Function
const substract = (a, b) => {
  return a - b;
};

const sub = substract(number1, number2);
console.log(`The substraction of ${number1} and ${number2} is ${sub}.`);
