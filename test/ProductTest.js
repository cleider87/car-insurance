const { expect } = require('chai');

const Product = require('../src/business/Product');

describe('Price Product Tests', () => {

  describe('"Low Coverage" Tests', () => {
    it('updatePrice from 50 to 0 (after 30 days)', () => {
      const productTest = new Product('Low Coverage', 1, 50);
      for(let i=0;i<30;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(0);
    });
  
    it('updatePrice from 50 to 40 (after 10 days)', () => {
      const productTest = new Product('Low Coverage', 20, 50);
      for(let i=0;i<10;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(40);
    });
  });

  describe('"Medium Coverage" Tests', () => {
    it('updatePrice from 50 to 0 (after 30 days)', () => {
      const productTest = new Product('Medium Coverage', 1, 50);
      for(let i=0;i<30;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(0);
    });
  
    it('updatePrice from 50 to 40 (after 10 days)', () => {
      const productTest = new Product('Medium Coverage', 20, 50);
      for(let i=0;i<10;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(40);
    });
  });

  describe('"Full Coverage" Tests', () => {
    it('updatePrice from 0 to 50 (after 30 days)', () => {
      const productTest = new Product('Full Coverage', 2, 0);
      for(let i=0;i<30;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(50);
    });
  
    it('updatePrice from 30 to 50 (after 30 days)', () => {
      const productTest = new Product('Full Coverage', 50, 30);
      for(let i=0;i<30;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(50);
    });
  });

  describe('"Special Full Coverage" Tests', () => {
    it('updatePrice from 20 to 22 (after 1 day)', () => {
      const productTest = new Product('Special Full Coverage', 10, 20);
      productTest.updatePrice();
      expect(productTest.price).equal(22);
    });
  
    it('updatePrice from 20 to 23 (after 1 day)', () => {
      const productTest = new Product('Special Full Coverage', 5, 20);
      productTest.updatePrice();
      expect(productTest.price).equal(23);
    });
  
    it('updatePrice from 20 to 0 (after 1 day)', () => {
      const productTest = new Product('Special Full Coverage', 0, 20);
      productTest.updatePrice();
      expect(productTest.price).equal(0);
    });
  });

  describe('"Super Sale" Tests', ()=>{
    it('updatePrice from 20 to 22 (after 30 days)', () => {
      const productTest = new Product('Super Sale', 10, 50);
      for(let i=0;i<30;i+=1){
        productTest.updatePrice();
      }
      expect(productTest.price).equal(0);
    });
  
    it('updatePrice from 50 to 48 (after 1 day)', () => {
      const productTest = new Product('Super Sale', 10, 50);
      productTest.updatePrice();
      expect(productTest.price).equal(48);
    });
  
    it('updatePrice from 30 to 26 (after 1 day)', () => {
      const productTest = new Product('Super Sale', 0, 30);
      productTest.updatePrice();
      expect(productTest.price).equal(26);
    });
  });

  describe('"Mega Coverage" Tests', ()=>{
    it('Should be legendary (price always 80)', () => {
      const productTest = new Product('Mega Coverage', 10, 80);
      for(let i=0;i<30;i+=1){
        productTest.updatePrice();
        expect(productTest.price).equal(80);
      }
    });
  });
});