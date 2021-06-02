var assert = require('assert');
const priceListFormatter = require("../hotel.js");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;
const sinon = require("sinon");

let priceList = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
];

describe("hotel problem", function(){
    it('priceListFormater should be a function', function () { 
        expect(priceListFormatter).to.be.a('function');
    });
    it("Should throw error if no arguments", function(){
        expect(()=> priceListFormatter()).to.throw();
    });
    it("Should throw error if arg is not array", function(){
        expect(() => dayOfYear({})).to.throw();
    })

    beforeEach(() => {
        sinon.restore();
      });
  
      const log = sinon.spy(console, "log");
      priceListFormatter(priceList);
      const result = log.args;    //0,0 jer vraca mapu a ne polje

    it("Should log an array", function(){
        expect(result).to.be.an('array');
    })
    
});