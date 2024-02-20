//ARRAY

let students = ['Dito', 'Mesakh', 'Prabu'];
let data = [100, true, false, null, 'Gilang'];
let random = [
  [
    [
      'JCWD','2702'
    ]
  ]
]

// CRUD (Create, Read, Update, Delete) 

//Create
const campusPwd = ['BSD', 'JKT', 'BTM'];

//Read
console.log(campusPwd[2]);
console.log(campusPwd[100]);

//Update
campusPwd[2] = 1000;
console.log(campusPwd);

//Delete
delete campusPwd[2]
console.log(campusPwd);

// METHOD 

//push
const fruits = ['Pisang', 'Mangga', 'Semangka']
fruits.push('Manggis');

//unshift
//pop
//shift
//length

//slice 
const alphabet = ['a','b','c','d'];
console.log(alphabet.slice(0,3));

//indexOf
const cars = ['Toyota','Daihatsu','Honda'];
console.log(cars.indexOf('Toyota'));
console.log(cars.indexOf('toyota'));

//sort
const arrNum = [100,3,5,52,59];
console.log(arrNum.sort((a,b)=> a-b));
console.log(arrNum.sort((a,b)=> b-a));

//splice : menambah menghapus mengupdate data
// menghapus
const food = ['Burger','Pizza','Cilor'];
food.splice(0,2);
console.log(food);

// mengupdate
const drink = ['boba','es teh manis solo','kopi'];
drink.splice(0,2,'jus','soft drink');
console.log(drink);

//menambah
const city = ['jakarta','depok','bogor'];
city.splice(0,0,'Kab Tangerang');
city.splice(5,0, 'jakbar');
console.log(city);

const input = [1,4,5,8,10];
const output = [];
for (let x of input) {
  if (x % 2 == 0) {
    output.push('even');
  }
  else {
    output.push('odd');
  }
}
console.log(output);

const inputStr = ['hello', 123, true, undefined, 'jcwd'] 
const output2 = []
for (let x of inputStr) {
  if (typeof x == 'string') {
    output2.push(x)
  }
}
console.log(output2);