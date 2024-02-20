//no 1
function objectEquals(obj1, obj2) {
  for(let key in obj1) {
    if (obj2[key] != obj1[key]) {
      return false;
    }
  }
  return true;
}

const objectA = {a: 1,
b: 2};
const objectB= {a: 1};
console.log(objectEquals(objectA, objectB));

//no 2 
function objectIntersect(obj1, obj2) {
  const obj3 = {};
  for(let key in obj1) { //pakai obj1 sebagai acuan
    if (obj2[key] == obj1[key]) { // comparing values 
      obj3[key] = obj2[key];
      //key     = //value
    }
  }
  return obj3;
}

const objectC = {a: 1, b:2}
const objectD = {b: 3, c:3}
console.log(objectIntersect(objectC,objectD));

//no 3


//no 4
function switcher(a) {
  for (let i of a) {
    const array1 = Object.entries(i); // cara bikin object menjadi array | i adalah object => hasilnya array
    // bikin variabel "obj"
    // array dari object i
    // console.log("i",i);
    // console.log("array1",array1);

    for (let j of array1) {
      let temp = j[0] //simpen keys
      j[0] = j[1]; // nuker key jadi value
      j[1] = temp; // nuker value jadi keys
    }
    return [Object.fromEntries(array1)] // cara bikin array menjadi object | array1 adalah array => hasilnya object
  }
}

const arr = [{name: 'David', age: "twenty"}];
console.log(switcher(arr))

//no 5
function factorial(n){
  //karakteristik 1 => END POINT // SYARAT UNTUK BERHENTI LOOP
  if (n <= 1) {
    return 1;
  } else {
    return n * factorial(n-1);
    // 3 * factorial(2) 
          //2 * factorial(1)
                // 1 * factorial(0)
                      // 1
                    // DATA STACK => KALAU KEBANYAKAN MUNCUL ERROR STACK OVERFLOW
  }
}

// recursive (jalan mundur)
// iterative / looping (jalan maju)
// biasanya semua hal yang bisa di recursive, bisa dijadiin looping / iterative

function factorialIterative(n) {
  let hasil = 1;
  for (let i = 1; i <= n; i++) {
    hasil *= i
  }
  return hasil;
}

console.log(factorial(5));
console.log(factorialIterative(5))