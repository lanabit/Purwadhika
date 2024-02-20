/*
//OBJECT

//CRUD (Create, Read, Update, Delete)

//read
const student = {
  name: 'Hanif',
  address: 'BSD'
}

// read
student.name;
student.address;
student['name'];

// update 
student.name = 'Mesakh'; //update name to 'Mesakh'
console.log(student);

const studentList = []; //create new array to contain objects of students
studentList.push(student); // push obj 'students'
console.log(studentList);

studentList.push({name: 'Adrian', address: 'Cilandak'}) // pushing new obj 
console.log(studentList);

student.phone = "083948292834"; // adds new properties to obj 'student'
console.log(student);

studentList[1].phone = "021-29382492" // adds new properties to obj studentList[1]
console.log(studentList);

const studentData = {}; // create new obj to contain objects of students
studentData['1'] = student; // create new property (1) with value (obj 'student')
console.log(studentData);
studentData[2] = studentList[1];
console.log(studentData);

// delete
delete student.name;
console.log(student);

// method => function dalam object. this -> untuk akses variable/apapun dalam object?
const print = {
  name: 'Defryan',
  greeting(address) {
    console.log(`Hello, ${this.name} from ${address}!`);
  },
  output: () => {
    console.log(`Hello, JCWD ${this.name}`);
  }
}

print.greeting('Bogor');
print.output();

// chaining condition 

const profile = {
  name: {
    firstName: "Ferry"
  }
}

console.log(profile?.name?.lastName?.a);

// destructuring assignment => konversi property object menjadi variable

const churchData = {
  name: 'Immanuel',
  address: 'BSD'
}

const {name, address} = churchData;
console.log(name);
console.log(address);

// looping object ( for ... in ... ) 

for (let key in churchData) {
  console.log(key);
  console.log(churchData[key]);
}

*/

// ------------------------------------------------------------------------

//case merubah price number menjadi IDR

const productPrice = [
  {name: 'Jeruk', price: 10000},
  {name: 'Anggur', price: 15000},
  {name: 'Semangka', price: 20000}
];

// my method
/*
for (let i of productPrice) {
  for (let j in i) {
    if ( j == "price") {
      i[j] = `Rp.${i[j].toLocaleString()}`;
    }
  }
} */

// alt method

for (let i of productPrice) {
  i.price = `${i.price.toLocaleString('id-ID', {style:'currency', currency: 'IDR'})}`
}

console.log(productPrice)