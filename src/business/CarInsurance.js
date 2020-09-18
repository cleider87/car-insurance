/* eslint-disable no-console */
class CarInsurance {
  constructor(products = []) {
    this.products = products.filter((product) => {
      if (!product.isValid()) {
        console.log(`"${product.name}" has wrong price!`);
        return false;
      }
      return true;
    });
  }

  updatePrices() {
    return this.products.map((product) => {
      product.updatePrice();
      return product;
    });
  }
}

module.exports = CarInsurance;
