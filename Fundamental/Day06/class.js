/*
// CLASS
// blueprint untuk membuat object dgn keys yang sama

const products = [
  { name: "Apel", Price: 10000 },
  { name: "Jeruk", price: 10000 },
  { name: "Anggur", price: 10000 },
];

class Products {
  name = "";
  price = 0;

  constructor(name, price) {
    this.name = name;
    this.price = price.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  }
}

const product2 = new Products("Jeruk", 15000);
console.log(product2);

const arrProducts = [
  new Products("Apel", 10000),
  new Products("Jeruk", 15000),
  new Products("Mangga", 18000),
];
console.log(arrProducts);

for (let i of arrProducts) {
  console.log(i.name);
}

class Student {
  constructor(name, age, address, school) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.school = school;
  }
}

const student1 = new Student("Aboy", 20, "Bintaro", "UGM");
console.log(student1);
*/
//=============================================================

//Case: di sebuah supermarket, ada banyak product dr bermacam category (electronic, fashion, dan snack).
//Setiap category memiliki identitas yg berbeda2 spt product name, product stock, dll
//1. Jabarkan apa saja identitas yg dimiliki untuk masing-masing category
//2. Buatkan class untuk setiap product category

// INHERITANCE
class ProductsMain {
  constructor(name, brand, price, discount, stock) {
    this.name = name;
    this.brand = brand;
    this.price = price;
    this.discount = discount;
    this.stock = stock;
  }
}

class Electronics extends ProductsMain{
  constructor(name, brand, price, discount, stock, watt, modelNumber, warranty) {
    super(name, brand, price, discount, stock);
    this.watt = watt;
    this.modelNumber = modelNumber;
    this.warranty = warranty;
  }
}

class Fashion extends ProductsMain{
  constructor(name, brand, price, discount, stock, type, size, material) {
    super(name, brand, price, discount, stock);
    this.type = type;
    this.size = size;
    this.material = material;
  }
}

class Snack extends ProductsMain{
  constructor(name, brand, price, discount, stock, calories) {
    super(name, brand, price, discount, stock);
    this.calories = calories;
  }
}

const productA= new Electronics('iPhone 200','Apfel',20000,'20%',2,'200W','2938AS-N',true);
console.log(productA)

/*
// ENCAPSULATION
// bundling data kedalam sebuah class => public property, private property

class Users {
  username = '';
  #email = ''; //private
  #password = ''; //private

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  // SETTER => method untuk memanipulasi data yang akan disimpan

  set emailValidation(email) {
    if(email.includes('@')) {
      this.#email = email;
    }else {
      console.log('Email Not Valid')
    }
  }

  // GETTER => method untuk mengambil data yang sudah dimanipulasi
  get showEmail() {
    return `***${this.#email.slice(4,this.#email.length)}`
  }

}

const user1 = new Users('ryan', 'abc123');
user1.emailValidation = 'ryan29@gmail.com'
console.log(user1.username);
console.log(user1.showEmail);
console.log(user1.password)
*/