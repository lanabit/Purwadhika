// CONDITIONAL STATEMENT

// If statement

const score = 80;
if(score > 70) {
  console.log('Score Passed!');
}

if(score !== 80) {
  console.log('Running');
}

if(score == '80') {
  console.log('Execute');
}

//If Else statement

const point = 70;
if(point >= 71) {
  console.log('Point Passed');
}else{
  console.log('Point Not Passed');
}

if(point <= 70) {
  console.log('Ok')
}else{
  console.log('Not Ok')
}

// If Else - If Else

const finalScore = 'A';

if(finalScore === 'A') {
  console.log('Nilai Baik')
}else if(finalScore === 'B') {
  console.log('Nilai Cukup')
}else {
  console.log('Nilai Kurang')
}

//case validasi, jml > 9 -> 'valid', jml < 9 -> 'not valid', valid 9-14 char

function numberValid(num){
  num = String(num);
  if (num.length < 9) {
    return "Phone Number Not Valid";
  }
  else if (num.length > 14) {
    return "Phone Number Not Valid";
  }
  else {
    return "Phoone Number Valid";
  }
}

console.log(numberValid(749284759604958));

//TERNARY OPERATOR
/*
nilai >= 70 ? 'lulus' : 'tidak lulus';
niali >= 90 ? 'lulus baik' : nilai >= 70 ? 'lulus' : 'tidak lulus';
*/

function lulusKah(num) {
  return num >= 90 ? 'Lulus baik' : num >= 70 ? 'Lulus' : 'Tidak Lulus';
}

console.log(lulusKah(100));