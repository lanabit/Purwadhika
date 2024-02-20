//FUNCTION
//"cetakan", "pabrik"

//1. Build
function loopingNumber() {
  const n = 5;
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

//2. Call
loopingNumber();
loopingNumber();

//TYPES
//- Function Declaration 
print();
function print() {
  console.log('Hello, World!');
}

//- Function Expression 
const output = function(){
  console.log('Hello, JCWD');
}

//- Arrow Function
const result = () => {
  console.log('Hello, Pwd!');
}


// FUNCTION WITH PARAMETERS
function looping(totalLoop) {
  for(let i = 1; i<= totalLoop; i++) {
    console.log(i);
  }
}
looping(5);
looping(25);

function outputProfile(name, hobby, address) {
  console.log(`Nama saya ${name}, hobby saya ${hobby}, saya tinggal di ${address}`);
}

outputProfile('Wulan', 'dengerin lagu', 'Bintaro');

// FUNCTION WITH RETURN 
function penjumlahan(num1, num2) {
  return num1+num2;
}

function pengurangan(num1, num2) {
  return num1 - num2;
}

function calculator(num1,num2,operator) {
  if(operator === '+') {
    return penjumlahan(num1,num2);
  }
  else if(operator === '-') {
    return pengurangan(num1,num2);
  }
}

console.log(calculator(3,5,'+'))

// FUNCTION WITH DEFAULT PARAM
function printOut(name = 'Anon') {
  return `Hello, my name is ${name}`;
}

console.log(printOut());
console.log(printOut('Wulan'));

// FUNCTION W/ REST PARAM
function outputRest(a,b,c, ...others) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(others);
}

outputRest(1,2);

// CLOSURE FUNCTION: inner function dapat mengakses variable di outer function
function bebas1(name) {
  function bebas2() {
    return `My name is ${name}`;
  }
}

console.log(bebas1('wulan'));

// RECURSIVE FUNCTION
function rec(num) {
  console.log("rec", num)
  if(num<3) {
    rec(num+1);
  }
}
rec(0)