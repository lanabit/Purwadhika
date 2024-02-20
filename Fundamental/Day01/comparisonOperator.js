//COMPARISON OPERATOR
//Operator Pembanding, boolean (True/False)
// >=, >, <, <=, !=, !==, ==, ===

let num1 = 10;
let num2 = 5;
console.log(num1 > num2);
console.log(num1 < num2);
console.log(5 >= 5);
console.log(5 <= 5);

// == -> check value only 
console.log( 5 == '5');
console.log( 'abc' == '5');

// === -> check value and data type
console.log(5 === '5');
console.log('abc' === 5);

console.log(5 != 5);
console.log("'5' != 5",'5' != 5);
console.log("'5' !== 5",'5' !== 5);

// INCREMENT & DECREMENT
let number = 100;
number++; //postfix
++number; //prefix
number--;
console.log(number);
 
//MODIFY IN PLACE
let num = 10;
num = num+10;
num += 5;
console.log(num);
