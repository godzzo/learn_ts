
let isDone: boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

let color: string = "blue";
color = 'red';

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `
    Hello, my name is ${ fullName }.
    I'll be ${ age + 1 } years old next month.
`;

let listA: number[] = [1, 2, 3];
// The second way uses a generic array type, Array<elemType>:

let list: Array<number> = [1, 2, 3];
// Tuple
// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// ERROR: x = [10, "hello"]; // Error
// When accessing an element with a known index, the correct type is retrieved:

console.log(x[0].substr(1)); // OK
// ERROR: console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'

// WTF???: x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
// WTF???: console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'
// WTF???: x[6] = true; // Error, 'boolean' isn't 'string | number'

enum Color {Red, Green, Blue};
let c: Color = Color.Green;

enum Color2 {Red = 1, Green, Blue};

let c2: Color2 = Color2.Green;

console.log(c2.valueOf());
console.log(c2.toString());

let colorName: string = Color[2];
console.log(colorName); // Displays 'Green' as its value is 2 above
