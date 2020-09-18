const { expect } = require('chai');

const Product = require('../src/business/Product');

describe('Price Product Tests', () => {

  it('"Low Coverage" updatePrice from 50 to 0 (after 30 days)', () => {
    const productTest = new Product('Low Coverage', 1, 50);
    for(let i=0;i<30;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(0);
  });

  it('"Low Coverage" updatePrice from 50 to 40 (after 10 days)', () => {
    const productTest = new Product('Low Coverage', 20, 50);
    for(let i=0;i<10;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(40);
  });

  it('"Medium Coverage" updatePrice from 50 to 0 (after 30 days)', () => {
    const productTest = new Product('Medium Coverage', 1, 50);
    for(let i=0;i<30;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(0);
  });

  it('"Medium Coverage" updatePrice from 50 to 40 (after 10 days)', () => {
    const productTest = new Product('Medium Coverage', 20, 50);
    for(let i=0;i<10;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(40);
  });

  it('"Full Coverage" updatePrice from 30 to 40 (after 10 days)', () => {
    const productTest = new Product('Full Coverage', 20, 30);
    for(let i=0;i<10;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(40);
  });

  it('"Full Coverage" updatePrice from 30 to 50 (after 30 days)', () => {
    const productTest = new Product('Full Coverage', 50, 30);
    for(let i=0;i<30;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(50);
  });

  it('"Special Full Coverage" updatePrice from 20 to 22 (after 1 day)', () => {
    const productTest = new Product('Special Full Coverage', 10, 20);
    productTest.updatePrice();
    expect(productTest.price).equal(22);
  });

  it('"Special Full Coverage"updatePrice from 20 to 23 (after 1 day)', () => {
    const productTest = new Product('Special Full Coverage', 5, 20);
    productTest.updatePrice();
    expect(productTest.price).equal(23);
  });

  it('"Special Full Coverage" updatePrice from 20 to 0 (after 1 day)', () => {
    const productTest = new Product('Special Full Coverage', 0, 20);
    productTest.updatePrice();
    expect(productTest.price).equal(0);
  });

  it('"Super Sale" updatePrice from 20 to 22 (after 30 days)', () => {
    const productTest = new Product('Super Sale', 10, 50);
    for(let i=0;i<30;i+=1){
      productTest.updatePrice();
    }
    expect(productTest.price).equal(0);
  });

  it('"Super Sale" updatePrice from 50 to 48 (after 1 day)', () => {
    const productTest = new Product('Super Sale', 10, 50);
    productTest.updatePrice();
    expect(productTest.price).equal(48);
  });

  it('"Super Sale" updatePrice from 30 to 26 (after 1 day)', () => {
    const productTest = new Product('Super Sale', 0, 30);
    productTest.updatePrice();
    expect(productTest.price).equal(26);
  });

  it('"Mega Coverage" should be legendary (price always 80)', () => {
    const productTest = new Product('Mega Coverage', 10, 80);
    for(let i=0;i<30;i+=1){
      productTest.updatePrice();
      expect(productTest.price).equal(80);
    }
  });

});