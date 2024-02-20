//METHOD 
//Shortcut untuk memanipulasi data

// STRING
// Slice : memotong
let text = "Hello, World";
console.log(text.slice(0,5)); //slice(indexStart, indexEnd), indexEnd not included

// .length
let name = 'Defryan';
console.log(name.length);

// toUpperCase / toLowerCase
let campus = 'bsd';
console.log(campus.toUpperCase());

// Substring: startIndex < endIndex. If startIndex > endIndex, index will be swapped.
let greeting = "Hello, World";
console.log(greeting.substring(0,5));


// replace 
console.log(greeting.replace(/o/g, 'x'));

// split
console.log(greeting.split(','));

//NUMBER
// toString
let number = 10;
console.log(number.toString());
let decimal = 0.999;
console.log(Number(decimal.toFixed()));

// DATE DATA TYPE
let now = new Date();
console.log(now);
console.log(now.getFullYear());

