const typescriptSample = `
// Note: In TypeScript and JavaScript, arrays are not traditional "arrays" 
// in the strictest sense, but rather complex objects that can be dynamic 
// and accept different primitive types.

// Basic Array Declaration and Operations
const numbers: number[] = [1, 2, 3, 4, 5];

// Accessing Elements
console.log(numbers[0]);  // 1
console.log(numbers[4]);  // 5

// Modifying Elements
numbers[2] = 10;  // [1, 2, 10, 4, 5]

// Adding Elements
numbers.push(6);  // [1, 2, 10, 4, 5, 6]
numbers.unshift(0);  // [0, 1, 2, 10, 4, 5, 6]

// Removing Elements
const lastElement = numbers.pop();  // Removes and returns 6
const firstElement = numbers.shift();  // Removes and returns 0

// Array Methods
const doubledNumbers = numbers.map(num => num * 2);
const filteredNumbers = numbers.filter(num => num > 2);
const sum = numbers.reduce((acc, num) => acc + num, 0);

// Multi-dimensional Array
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log(matrix[1][1]);  // 5
`

export default typescriptSample;