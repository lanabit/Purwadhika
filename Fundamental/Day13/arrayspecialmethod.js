const numbers = ['A','B','C'];
const cont = [];

numbers.forEach((val,index) => {
  val = val+'A'
  console.log(val)
  cont.push(val)
}) // undefined
console.log(numbers)
console.log(cont)

const newNumbers2 = numbers.map((_, index) => {
  return index
})

const newNumbers3 = numbers.filter((item, index) => {
  return item === 'A'
})

console.log(newNumbers2)
console.log(newNumbers3)