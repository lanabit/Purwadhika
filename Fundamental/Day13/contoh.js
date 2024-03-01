const text =
'{ "employees": [' +
'{ "firstName": "John"}]}';
let a = JSON.parse(text)

console.log(JSON.stringify(a))

const arr = [1,2,4,56,7,3,42];
const irr = arr.splice(3);
console.log("arr",arr)
console.log("irr",irr)

const cloth = ["uniqlo","wadezig","UKL"];
let b = cloth.splice(2,0)
console.log(b)