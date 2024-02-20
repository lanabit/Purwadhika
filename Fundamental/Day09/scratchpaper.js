const obj = {} 
for(let key in obj) {
  console.log(key)
}

var filter = function(arr, fn) {
  const result = [];
  for(let i of arr) {
    if(fn(i)){result.push(i)}
  }
  return result
};

arr = [0,10,20,30]
fn = function greaterThan10(n) { return n > 10; }

const newArr = filter(arr,fn)

console.log(newArr)

