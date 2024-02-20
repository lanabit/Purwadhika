// no 1
function high_low_avg(arr) {
  const newArr = arr.sort((a,b) => a-b);
  let lowest = newArr[0];
  let highest = newArr[newArr.length-1];
  let average = newArr.reduce((acc, x) => acc+x,0) / newArr.length;
  return `lowest: ${lowest}, highest: ${highest}, average: ${average.toFixed(3)}`;
}

console.log(high_low_avg([12,5,23,18,4,45,32]));

// no 2
function concat_and(arr) {
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    str = str.concat(arr[i], ', ');
    if (i == arr.length - 1) {
      str = str.concat('and ', arr[i]);
    }
  }
  return str;
}

console.log(concat_and(['Apple','banana','cherry','date']));

// no 3
function splitter(str) {
  return str.split(' ');
}

console.log(splitter("Hello World"))

// no 4
function two_arr_calc(arr1, arr2, result = []) {
  for (let i = 0; i < arr1.length; i++) {
    result[i] = arr1[i] + arr2[i];
  }
  return result;
}

console.log(two_arr_calc([1,2,3],[3,2,1]))

// no 5
function new_append(arr, el) {
  if(!arr.includes(el)){
    arr.push(el)
  }    
  return arr;
}

console.log(new_append([1,2,3,4],7))

// no 6
function evenOnly(arr) {
  return arr.filter((x) => x % 2 == 0);
}

console.log(evenOnly([1,2,3,4,5,6]));

// no 7 
function max_input(max, ...nums) {
  const arr = [];
  for(let i = 0; i < max; i++) {
    arr.push(nums[i]);
  }
  return arr;
}

console.log(max_input(3, 1,3,4,5,6));

// no 8 
function arr_concat(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(arr_concat([1,2],[3,4,5,6]));

// no 9
function arr_duplicates(arr) {
  const obj = {}
  for (let i of arr) {
    if (!obj.hasOwnProperty(i)) {
      obj[i] = 1;
    }
    else {
      obj[i]++
    }
  }
  const result = Object.keys(obj).filter(key => obj[key] > 1);
  return result.map((x) => parseInt(x));
}

console.log(arr_duplicates([1,2,2,2,3,3,4,5,5]));

// no 10
function arr_difference(arr1,arr2, result = []) {
  for (let x of arr1) {
    if (!arr2.includes(x)) {
      result.push(x);
    }
  }
  for (let x of arr2) {
    if (!arr1.includes(x)) {
      result.push(x);
    }
  }
  return result;
}
console.log(arr_difference([1,2,3,4,5],[3,4,5,6,7]))

// no 11
function primtive_only(arr) {
  return arr.filter((x) => typeof x !== 'object');
}

console.log(primtive_only([1,[],undefined,{},"string",{},[]]));

// no 12
function second_smallest(arr) {
  return arr.sort((a,b) => a - b)[1];
}
console.log(second_smallest([5,3,1,7,2,6]));

// no 13
function mixed_arr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == 'number') {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(mixed_arr(["3",1,"string", null, false, undefined,2]));

// no 14
function duplicate_sum(arr) {
  const obj = {}
  for (let i of arr) {
    if (!obj.hasOwnProperty(i)) {
      obj[i] = 1;
    }
    else {
      obj[i]++
    }
  }
  const result = Object.keys(obj).filter(key => obj[key] > 1);
  return result.map((x)=> parseInt(x) * obj[x]);
}
console.log(duplicate_sum([10,20,40,10,50,30,10,60,10]));

// no 15
function rock_paper_scissor(str){
  let comp = Math.random();
  if(comp < 0.3) {
    comp = 'rock';  
  }else if(comp < 0.6) {
    comp = 'scissor';
  }else {
    comp = 'paper';
  }
  console.log(comp);
  if (comp == str) {
    return "Draw"
  } else if ((comp == 'rock' && str.toLowerCase() == 'paper') || (comp == 'paper' && str.toLowerCase() == 'scissor') || (comp == 'scissor' && str.toLowerCase() == 'rock')) {
    return "Win"
  } else {
    return "Lose"
  }
}

console.log(rock_paper_scissor('rock'));

// no 14 punya barrent
/*function sumDuplicates(arrayOfDuplicates){
  let allDuplicates = [];
  let sumOfAll = null;
  
}*/

// slide 2 nomor 1 punya gee
function numbers(parameter){
  let even = []
  for( let i=0; i < parameter.length; i++){
  if (parameter[i] % 2 === 0 )
      even.push(parameter[i])
  }
  return even
} //function komplit 

console.log(numbers([1,2,3,4,5,6]));

//function declarative
function namaFunction (parameter, parameter2) {
  let hasil = parameter; // block of code
  return hasil; // return value
} //anatomi umum 

