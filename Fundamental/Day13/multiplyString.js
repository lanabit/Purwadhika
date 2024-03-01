function GetArr(arr){ 
  return arr.forEach(value => {
      return value
  })
} 
function GetValue(arr){ 
  return arr.map(value => {
      return value
  })
}
let arr = ["A", null, true, undefined, 20]
console.log(GetArr(arr))
console.log(GetValue(arr))