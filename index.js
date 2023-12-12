
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;
console.log(multiply); 

// Create a variable called random that will generate a random integer greater than 0.
const random = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER) + 1;

console.log(random);

// Assuming you have num3 and num4 defined somewhere in your code
const num3 = 13;
const num4 = 3;

// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
const mod = (num3 % num4) === 4;

// Log the result
console.log(mod); // Output: true


// Assuming you have a set of numbers
const numbers = [5, 10, 15, 20];

// Create a variable called max that finds the highest number in the set
const max = Math.max(...numbers);

// Log the result
console.log(max); // Output: 20
