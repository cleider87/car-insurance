class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrices() {
    return this.products.map((product) => {
      product.updatePrice();
      return product;
    });
  }
}

module.exports = CarInsurance;
