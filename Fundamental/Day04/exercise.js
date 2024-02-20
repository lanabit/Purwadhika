// no 1

function triangle(row) {
  const pad = (x) => x < 10 ? '0'+ x : x;

  let nums = 1;
  let str = '';
  for(let i = 1; i <= row ; i++) {
    for(let j = 1; j <= i; j++) {
     str += `${pad(nums++)} `
     if (j == i && i !== row) {
      str += `\n`;
     }   
    }
  }
  return str;
}

console.log(triangle(4));

// no 2

function fizzBuzz(num) {

  result = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      result.push('FizzBuzz');
    }
    else if (i % 3 == 0) {
      result.push('Fizz');
    }
    else if (i % 5 == 0) {
      result.push('Buzz');
    }
    else{
      result.push(i);
    }
  }
  return result.join(', ');
}

console.log(fizzBuzz(15));

// no 3

function bmiCalc(weight,height) {
  let bmi = weight / Math.pow(height/100,2);
  return bmi < 18.5 ? "less weight" :
  bmi > 18.5 && bmi < 24.9 ? "ideal" :
  bmi > 25 && bmi < 29.9 ? "overweight" :
  bmi > 30 && bmi < 39.9 ? "very overweight" :
  "obesity"  
}

console.log(bmiCalc(50,160));

// no 4

function evenOnly(arr) {
  return arr.filter((x) => x % 2 == 0);
}

console.log(evenOnly([1,2,3,4,5,6]));

// no 5

function splitter(str) {
  return str.split(' ');
}

console.log(splitter('Hello World Are You Listening'));