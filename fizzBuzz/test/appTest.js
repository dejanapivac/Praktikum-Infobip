const assert = require("chai").assert;
const fizzBuzz = require("../FizzBuzz");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;

describe("fizzBuzz problem", function () {
    it("fizzBuzz treba biti funkcija", function () {
      fizzBuzz();
    });
    it("function should throw error if argument is not  a number", function () {
        // assert.ifError(fizzBuzz('1'));
        // assert.ifError(fizzBuzz('1'));
        fizzBuzz(1);
    });
    it("app should return fizz if number is dividable by 3", function () {
        // let result = fizzBuzz(3);
        // // const result = fizzBuzz;
        // // expect(result)
        // // assert.equal(fizzBuzz(), "Fizz")
        // expect(result).to.be.eq("Fizz")
        // .to.be.eq("Fizz")
        // .to.be.eq("Buzz")
        // .to.be.eq("FizzBuzz")
        // -----Draganovooooo----
        let result = fizzBuzz(3);
        expect(result).to.eq("Fizz");
    });
    it("should return buzz if number is dividable by 5", function () {
        assert.equal(fizzBuzz(5), "Buzz"); 
        // assert.equal(fizzBuzz(), "Buzz")
    });
    it("should return fizzbuzz if number is dividable by 3 and 5", function () {
        expect(fizzBuzz(15)).to.be.eq("FizzBuzz");
        // assert.equal(fizzBuzz(), "FizzBuzz")
    });
    it("app should return fizzbuzz", function () {
        let result = fizzBuzz(4);
        expect(fizzBuzz(4), undefined);
        // assert.equal(fizzBuzz(), "i")
    });
    it("App should return Suzz if number is devidable by 7", function(){
        assert.equal(fizzBuzz(7), "Suzz");
    });
    it("App should return BuzzSuzz if number is devidable by 5 and 7", function(){
        expect(fizzBuzz(35)).to.be.eq("BuzzSuzz");
    });
    it("App should return FizzSuzz if number is devidable by 3 and 7", function(){
        expect(fizzBuzz(21)).to.be.eq("FizzSuzz");
    });
    it("App should return FizzBuzzSuzz if number is devidable by 3, 5 and 7", function(){
        expect(fizzBuzz(105)).to.be.eq("FizzBuzzSuzz");
    })
})