const { expect } = require('chai');

const CarInsurance = require('../src/business/CarInsurance');

const Product = require('../src/business/Product');

describe('CarInsurance Tests', () => {

  const carInsuranceTest = new CarInsurance([
    new Product('Low Coverage', 5, 7),
    new Product('Medium Coverage', 0, 7),
    new Product('Full Coverage', 2, 0),
    new Product('Special Full Coverage', 15, 20),
    new Product('Super Sale', 10, 50),
    new Product('Mega Coverage', 0, 80),
    // Invalid products
    new Product('Full Coverage', 2, -10),
    new Product('Super Sale', 10, 51),
    new Product('Mega Coverage', 0, 81),
    new Product('Mega Coverage', 0, 10),
  ]);

  beforeEach(() => {
    carInsuranceTest.updatePrices();
  })

  it('"Low Coverage" price should be 6 (1 day)', () => {
    expect(carInsuranceTest.products[0].price).equal(6);
  });

  it('"Medium Coverage" price should be 3 (2 days)', () => {
    expect(carInsuranceTest.products[1].price).equal(3);
  });

  it('"Full Coverage" price should be 4 (3 days)', () => {
    expect(carInsuranceTest.products[2].price).equal(4);
  });

  it('"Special Full Coverage" price should be 24 (4 days)', () => {
    expect(carInsuranceTest.products[3].price).equal(24);
  });

  it('"Super Sale" price should be 40 (5 days)', () => {
    expect(carInsuranceTest.products[4].price).equal(40);
  });

  it('"Mega Coverage" price should be 80 (6 days)', () => {
    expect(carInsuranceTest.products[5].price).equal(80);
  });

  it('CarInsurance should have 6 products', () => {
    expect(carInsuranceTest.products.length).equal(6);
  });
});
