
// Write your code here
//Equation
let num1 = 31;
let num2 = 2;
let multiply = num1*num2;
console.log(multiply);
//Random interger
//random_int=random.randit(1,100)
let random = Math.floor(Math.random() * 100) + 1;

//Remainder
let num3 = 14;
let num4 = 5;
let mod = num3 % num4;

// Return highest number
//numbers = [1, 3, 7, 20, 14, 9]
//max_value = max(numbers)
let numbers = [1, 3, 7, 20, 14, 9];
let max = Math.max(...numbers);

module.exports = { multiply, random, mod, max };



