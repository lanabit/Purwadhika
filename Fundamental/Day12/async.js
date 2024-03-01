// ASYNC

let numbers = [1,2,3,4,5,6];

function deleteData(cb){
  setTimeout(()=>{
    numbers.pop()
    cb()
  }, 3000)
}

function showData(){
  setTimeout(() => {
    console.log(numbers)
  }, 2000)
}

function showData2(arr){
  setTimeout(() => {
    console.log(arr)
  }, 2000)
}

deleteData(showData);
showData2(['a','b','c'])