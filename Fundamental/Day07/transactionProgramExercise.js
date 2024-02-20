class Product {
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
}

class Transaction {
  constructor(){
    this.items = [];
    this.totalPrice = 0;
  }

  addToCard(product,qty) {
    this.items.push({
      product: product.name,
      price: product.price,
      qty: qty,
      totalPerProduct: product.price * qty
    })
    return this.items;
  }

  checkout() {
    let outputStr = ''
    for(let i of this.items) {
      this.totalPrice += i.totalPerProduct;
      outputStr += `Product: ${i.product}, Price: ${i.price}, Qty: ${i.qty} \n`;
    }
    return console.log(`${outputStr}\nTotal: ${this.totalPrice}`)
  }
}

const airCon = new Product('air conditioner',4000000);
const fridge = new Product('fridge',5520000);
const user1 = new Transaction();
user1.addToCard(airCon,2);
user1.addToCard(fridge,1);
user1.checkout();