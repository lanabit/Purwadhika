// MUTABLE (Copy by Reference)
// Variable yang valuenya bisa berubah saat di-copy
let array1 = ["a", "b", "c"];
let array2 = array1;
array2[0] = "d";
console.log("Array1:", array1);
console.log("Array2:", array2);
let array3 = [...array2]; //kalo begini jadi immutable, makanya dibaris selanjutnya per elemen bisa diubah valuenya tanpa mengusik array 'refrensi'
array3[1] = "f";
console.log("Array3:", array3);

let dataStudent1 = {
  name: "Ryan",
  hobby: "Ngoding",
};

console.log("dataStudent1 previous:", dataStudent1);
let dataStudent2 = dataStudent1;
dataStudent2.name = "Defryan";
console.log("dataStudent1 after:", dataStudent1);
console.log("dataStudent2:", dataStudent2);

// IMMUTABLE (Copy by Value)
// Varibale yang valuenya tidak bisa dirubah
let str1 = "Hello";
let str2 = str1;
str2 = "Hello Hai";
console.log("str1", str1);
console.log("str2", str2);
