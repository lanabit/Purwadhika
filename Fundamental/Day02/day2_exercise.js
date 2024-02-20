//1. write a code to converst cercius to fahrenheit
function celciusToFahrenheit(num){
  let result = num * (9/5) + 32;
  return result.toFixed(2);
}
console.log(celciusToFahrenheit(24));

//2. check if number is odd or even
function oddOrEven(num){
  if(num%2==0){
    return 'Even Number'
  }else {
   return 'Odd Number' 
  }
}
console.log(oddOrEven(13));

//3. write a code to check whether a number is prime or not
function isPrime(num) {
  for(let i = 2; i < num; i++){
    if(num % i == 0) return 'not a prime'
  }
  return `${num} is prime`
}
console.log(isPrime(97));

//4. find the sum or number 1 to N
function oneToN(num){
  let x = 0;
  for(let i = 1; i <= num;i++){
    x += i;
  }
  return x; 
}
console.log(oneToN(5));

let sumN = 0;
let numN = 5;
for(let i = 1; i <= numN; i++) {
  sumN += i;
}
console.log(`sum 1 to ${numN} = ${sumN}`);

//5. find the factorial of a number 
function factorial(num){
  let x = 1;
  for(let i = 1; i <= num;i++){
    x *= i;
  }
  return x;
}
console.log(factorial(6));


// 6. print the N-th fibonacci numbers
function fib(nth){
  if(nth == 1 || nth == 2) {
    return 1;
  }
  else { return fib(nth-1) + fib(nth-2)};
}
console.log(fib(2));

// 6. alternative method (iterative)
function fib2(n){
  let output;

  if(n == 1 || n == 2) {
    output = 1;
  }

  let prev = 1;
  let prevprev = 1;
  for (let i = 3; i <= n; i++) {
    output = prev + prevprev;
    prevprev = prev;
    prev = output;
  }
  return output;
}
console.log("fib alternatif",fib2(15));

//prime 
const num = 7
let isPrimeX = true
for(let i=2;i<num; i++) {
  if(num%i == 0) {
    isPrimeX = false;
  }
}

if(isPrimeX === true || num == 2) {
  console.log("prime");
}else if( isPrimeX == false || num == 1) {
  console.log("notprime")
}
