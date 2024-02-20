// Sum dari 1 sampai N
// N = 5; 1 + 2 + 3 + 4 + 5 = ??? 15

let sum = 0; //inisialisasi / initialization / dibutuhkan utk tempat untuk naro hasil
let N = 30; // ini mau ngitung ampe berapa
for (let i = 1; i <= N;i++){
  sum = sum + i;
}
console.log(sum);

//=====================================================

//code gee pakai chat GPT
function sumOfNumbers(N) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    sum += i;
  }
  return sum; //wajib kudu ada di function
}

const result1 = sumOfNumbers(5);
console.log(`Sum of numbers from 1 to 5: ${result1}`);

//=======================================================

let tempat = 'roma';
let tempat2 = '';
let tempat3 = '';
console.log(`sarimin pergi ke ${tempat}, ${tempat2}, ${tempat3} `); // string literal