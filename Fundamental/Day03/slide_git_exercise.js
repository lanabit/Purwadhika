// no 1

function multiplicationTable(num){
  let show;
  for(let i = 1; i <= num; i++){
    console.log(`${num} x ${i}`);
  }
}

multiplicationTable(9);

// no 2

function checkPalindrome(string) {
  return string.toLowerCase() == string.toLowerCase().split('').reverse().join('') ? `${string} is palindrome` : `${string} is NOT palindrome`;
}

console.log(checkPalindrome("madam"))

// no 3

function cmToKm(num) {
  return num/100000 + " km";
}

console.log(cmToKm(250000));

// no 4

function rupiah(num) {

  //alternative method
  
  const newNum = num.toLocaleString('id-ID');

  num = num.toString().split('').reverse();
  for (let i = 3; i < num.length; i += 4) {
    num.splice(i,0,'.');
  }
  let result = num.reverse().join('')



  return `Rp. ${result},00 | alternate method Rp. ${newNum},00`;
}
console.log(rupiah(1234000000));



// no 5

function omitter(str, target) {
  return str.replace(target, '');
}
console.log(omitter("Hello world","ell"));

// no 6

function capitalize(str) {
  let tempStr = str.split(' ');
  for(let i = 0; i < tempStr.length; i++) {
    tempStr[i] = tempStr[i].split('');
    tempStr[i][0] = tempStr[i][0].toUpperCase();
    tempStr[i] = tempStr[i].join('');
  }
  return tempStr.join(' ');
}
console.log(capitalize("hello world"));

// no 7

function reversal(str) {
  let arr = [];
  for(let i = str.length-1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return console.log(arr.join(''));
}
reversal("hello")

// no 8

function caseSwap(str) {
  const upper = /[A-Z]/g;
  let tempStr = str.split('');
  for(let i = 0; i<tempStr.length;i++){
    if(tempStr[i].match(upper)){
      tempStr[i] = tempStr[i].toLowerCase();
    } else {
      tempStr[i] = tempStr[i].toUpperCase()
    }
  }
  return tempStr.join('');
}

console.log(caseSwap("The QuiCk BrOwN Fox"));

// no 9

function larger(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

console.log(larger(42,27));

// no 10

function sortThreeNums(num1,num2,num3) {
  let temp;
  let arr = [num1, num2, num3]
  //bubble sort
  for(let i = 0; i < arr.length; i++) { 
    for (let j = 0; j < arr.length-i; j++){
      if (arr[j] > arr [j+1]) {
        temp = arr[j+1];
        console.log(temp);
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(sortThreeNums(42,27,18));

// no 11

function typeOfData(a) {
  return (typeof a == 'string') ? "1" : (typeof a == 'number') ? "2" : "3"; 
}

console.log(typeOfData("hello"));

// no 12

function aCensor(str) {
  const a = /a/gi;
  return str.replaceAll(a,'*');
}
console.log(aCensor("An apple a day keeps the doctor away"));


//////
let num1 = 42;
let num2 = 27;
let num3 = 18;
let smallest;
let medium;
let biggest;
if(num1 - num2 > 0 && num1 - num3 > 0) {
  biggest = num1;
  if (num2 > num3) {
    medium = num2;
    smallest = num3;
  } else {
    medium = num3;
    smallest = num2;
  }
}
if(num2 - num1 > 0 && num2 - num3 > 0) {
  biggest = num2;
  if (num1 > num3) {
    medium = num1;
    smallest = num3;
  } else {
    medium = num3;
    smallest = num1;
  }
}
if(num3 - num1 > 0 && num3 - num2 > 0) {
  biggest = num3;
  if (num1 > num2) {
    medium = num1;
    smallest = num2;
  }
  else {
    medium = num2;
    smallest = num1;
  }
}
console.log(smallest, medium, biggest);