//1. Indirect Callback

function Penjumlahan(num1, num2, cb){
  return cb(num1+num2)
}

function Print(result) {
  console.log(result)
}

Penjumlahan(3,5,Print);

//2. Direct callback

Penjumlahan(3,5,(item) => console.log(item));