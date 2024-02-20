//TRUTHY FALSY 
// Nilai non boolean yang akan dikonversi menjadi boolean ketika bertemu conditional statement

console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(1))
console.log(Boolean(' '))

const input = ''

if(input.length === 0){
  console.log('Input Harus Diisi')
}else{
  console.log('Input Sudah Benar')
}

if(input){
  console.log('Input Sudah Benar')
}else{
  console.log('Input Harus Diisi')
}
