//LOOPING
//Must Have: Start, End, ExitWay

//Case: tolong tampilkan teks sasageyo 10x
const txt = 'sasageyo';
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
console.log(txt);
//kurang efisien

//Solusi:

//1. WHILE loop
/*
Syntax: 
  while(condition) {
    Block of code
  }
*/

let start = 1;
while(start <= 10) {
  console.log(txt,start)
  start++
}

let init = 1;
while(init < 10) {
  console.log (txt,init)
  init++
}

//2. DO - WHILE loop
/*
syntax:
  do {
    block of code
  }while(condition)
*/
let initVal = 1;
do {
  console.log(initVal);
  initVal+=2;
}while(initVal <= 5);

let initCount = 1; 
do{
  console.log(initCount);
  initCount++;
}while(initCount<1);

//3. FOR loop
/*
syntax:
  for(start;condition;exitway){
    block of code
  }
*/

for(let i=1; i<= 5; i++){
  console.log(i);
}

//case angka 10-1

for(let startVal = 10; startVal >= 1; startVal--) {
  console.log(startVal);
}

//4. BREAK & CONTINUE

for (let i = 1; i < 5; i++) {
  if(i === 1) continue;
  console.log("continue",i);
}

for (let i = 1; i < 5; i++) {
  if(i === 1) break;
  console.log("break",i);
}

//case: kondisi x >= 70 lulus, krg tidk lulus

let x = 69;
if(x<70){
  console.log("tidak lulus!");
}else{
  console.log("lulus!");
}

function nilaiLulus(num) {
  if(num < 70){
    return "tidak lulus!"
  }
  return "lulus!"
}

console.log(nilaiLulus(69));
