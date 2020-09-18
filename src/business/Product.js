class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    let velocity = 1;
    let deacrese = true;
    let legendary = false;
    let anulation = false;

    switch (this.name) {
      case 'Full Coverage':
        deacrese = false;
        break;
      case 'Special Full Coverage':
        deacrese = false;
        if (this.sellIn <= 10 && this.sellIn > 5) {
          velocity = 2;
        }
        if (this.sellIn <= 5) {
          velocity = 3;
        }
        if (this.sellIn === 0) {
          anulation = true;
        }
        break;
      case 'Mega Coverage':
        legendary = true;
        break;
      case 'Super Sale':
        if (this.sellIn <= 0) {
          velocity = 2;
        }
        velocity *= 2;
        break;
      default:
        if (this.sellIn <= 0) {
          velocity = 2;
        }
        break;
    }

    if (!legendary) {
      if (deacrese === false && this.price < 50) {
        this.price += velocity;
      }
      if (deacrese === true) {
        if ((this.price - velocity) > 0) {
          this.price -= velocity;
        } else {
          this.price = 0;
        }
      }
      if (anulation === true) {
        this.price = 0;
      }
      this.sellIn -= 1;
    }
  }
}

module.exports = Product;
