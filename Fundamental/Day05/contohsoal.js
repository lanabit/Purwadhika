function numbers(parameter){
  let arrayBaru = [];
  //loop => proses yang berulang
  for (let i = 0; i < parameter.length; i++){
    //condition => ada kriteria yang harus dipenuhi
    if (parameter[i] % 2 == 0) {
      arrayBaru.push(parameter[i]); //PENTING untuk tau methods apa aja yang bisa kita pakai => hafal, latihan
    }
  }
  return arrayBaru;
} //tujuan function ini: memilih angka-angka genap dari array yang dimasukkan 

console.log(numbers([2,4,6,7,8,9,10])); //gak muncul tapi jalan krn gak ada console.log

// //function declarative
// function namaFunction (parameter, parameter2) {
//   let hasil = parameter; // block of code
//   return hasil; // return value
// } //anatomi umum 

function huruf(text) {
  return text.split(' '); //return menyimpan hasil dari function
} //tujuan functionnya adalah mencacah kalimat

console.log(huruf("anak WD"));

function items(fruitArray){
  // splice => method array, nyisipin sesuatu 
  fruitArray.splice(3, 2, "and"); // METHODS harus hafal
  return fruitArray.toString(); 
}
console.log(items(['apple','banana','cherry','date','nanas', 'salak']));

function SeparatesComma(arrStr){
  return arrStr.slice(0, arrStr.length-1).join(', ') + ', and ' + arrStr[arrStr.length-1]
}

console.log(SeparatesComma(['Apple', 'Banana','Cherry', 'Date','salak','mangga']))

//
function duplicateArr(n) {
  let emptyArr = [];

  for (let i = 0; i < n.length; i++) {
      // Use filter to count occurrences of n[i]
      let count = n.filter(value => value === n[i]).length;

      // Check if count is greater than or equal to 2 and if the element is not already in emptyArr
      if (count >= 2 && !emptyArr.includes(n[i])) {
          emptyArr.push(n[i]);
      }
  }

  return emptyArr;
}

console.log(duplicateArr([1, 2, 2, 2, 3, 3, 4, 5, 5]));