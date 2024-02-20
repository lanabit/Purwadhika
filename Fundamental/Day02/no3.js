// 3. ngecek bilangan prima

// PRIMA??? 
// PRIMA adalah bilangan yang CUMA BISA HABIS kalau dibagi angka 1 dan BILANGAN ITU SENDIRI.
// artinya, num % i == 0 HANYA JIKA i == 1 atau i == 7.

// 6 -> 1 & 6 -> 2,3,4,5 -> bukan prima karena 6 % 2 == 0, sementara 2 bukan 1 ataupun 6
// 7 -> 1 & 7 -> 2,3,4,5,6 -> prima karena 7 % 2 !== 0, 7 % 3 !== 0, ... 7 % 6 !== 0  

let num = 11;
let result;
for(let i = 2; i < num; i++) {
  
  if (num % i == 0) {
      result = 'tidak prima';
      break;
  }else {
    result = 'prima';
  }
};
console.log(result);

/*

let num = 9;
let result;
for(let i = 2; i < num; i++) {
  // pembagian (/) vs. sisa pembagian (%)
  // 7 % 2 ==> 1
  // 7 % 3 ==> 1
  // 7 % 4 ==> 3
  // 7 % 5 ==> 2
  // 7 % 6 ==> 1
  // ==> PRIMA
  
  console.log("i =", i); //cek nilai i
  
  console.log("num % i =", num % i); //cek hasil num%i
  
  if (num % i == 0) {
      result = 'tidak prima';
      break;
  }else {
    result = 'prima';
  }
};
console.log(result);

*/


