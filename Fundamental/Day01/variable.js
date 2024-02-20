console.log('Hello, World!');

// Variable = tempat menyimpan data -> 
// Decrale Variable + Assign Value
var studentName = 'Immanuel';
var lectureName = "Defryan";

// + Rules for Variables
// 1. Nama Variable Harus Jelas
var nama = 'Soekarno'; //nama apa? give context
var namaPahlawan = 'Soekarno'; // better :D

// 2. Harus diawali dengan Alfabet atau special character yang sudah ditentukan Javascript(_, $) 
// var #pwdk; var 1lyat; //GAK BOLEH
var pwdk; var _pwdk; var $pwdk; //boleh 

// 3. Connecting words pakai _ atau camelCase 

// 4. Penamaan tidak boleh sama dengan Syntax JS

// 5. Case sensitive
var student = "Mesakh";
var Student = "Bulan";
console.log(Student);
console.log(student);

// VAR vs LET vs CONST

// Memperbolehkan nama variable yang sama (var)
// Memperbolehkan merubah value (let)
// Tidak diperbolehkan merubah value (const)

var number = 10;
number = 20;
console.log(number);

let umur = 17;
umur = 20;
console.log(umur);

const color = 'red';
// tog color = 'green';