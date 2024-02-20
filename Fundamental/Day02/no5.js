// faktorial 5 = 5! = 5 x 4 x 3 x 2 x 1 atau 1 x 1 x 2 x 3 x 4 x 5; //
// faktorial N = N!


let result = 1; //initialize //"tempat naro hasil"
let N = 4;
for (let i = 1; i <= N; i++) {
  result = result * i;
}
console.log(result);


//contoh slide 
// 4! = 24; 1 x 2 x 3 x 4

//kalau RESULT = 0
// 0 x 1 x 2 = 0 x 2 = 0
// 0 x 1 x 2 x 3 = 0 x 6 = 0
// 0 x 1 x 2 x 3 x 4 = 0 x 24 = 0

//kalau RESULT = 2
// 2 x 1 x 2 = 2 x 2 = 4
// 2 x 1 x 2 x 3 = 2 x 6 = 12
// 2 x 1 x 2 x 3 x 4 = 2 x 24 = 48


//kalau RESULT = 1
// 1 x 1 x 2 = 1 x 2 = 2
// 1 x 1 x 2 x 3 = 1 x 6 = 6
// 1 x 1 x 2 x 3 x 4 = 1 x 24 = 24 //INI YANG KITA PAKAI
