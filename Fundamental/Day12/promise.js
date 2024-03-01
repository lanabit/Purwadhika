//PROMISE

// const { reject } = require("async");

function simplePromise(){
  return new Promise((res,err) => {
    if(a === 1) {
      res('Yes, a === 1');
    }else {
      err('No, a !== 1');
    }
  })
}

let a = 2

simplePromise()
.then((res) => {console.log(res)})
.catch((err) => console.log(err))

let numbers = [1,2,3,4,5,6]

function deleteData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      numbers.pop()
      resolve(numbers);
    },3000)
  })
}

function showData(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numbers)
    },2000)
  })
}

showData()
.then(() => {
  return deleteData()
})
.then(() => {
  return deleteData()
})
.then(() => {
  return showData()
})
.then((res) => {
  console.log(res)
})
.catch((err) => {
  console.log(err)
})

// PROMISE CHAINING 