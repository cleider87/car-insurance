class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    this.price -= 1;
    this.sellIn -= 1;
  }
}

module.exports = Product;
