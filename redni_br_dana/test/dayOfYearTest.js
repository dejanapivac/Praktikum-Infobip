//const assert = require("chai").assert;
var assert = require('assert');
const dayOfYear = require("../dayOfYear.js");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;

//ako hocemo preskocit neki test onda stavimo describe.skip ili it.skip

//?? kak da odredim test nakon not number testa confused how do i know i dont know

describe("dayOfYear problem", function(){
    it("dayOfYear should be a function", function(){
        expect(dayOfYear).to.be.a('function');
    });
    it("should throw error if there's no 3 arg", function(){
        expect(() => dayOfYear()).to.throw();
    }); 
    it('should throw error if any argument is not number', function () {
        expect(() => dayOfYear(2000, 'meow', "heh hehe")).to.throw();
    });
    it('should return 1 if 1st of January 2000', function () {
        expect(dayOfYear(2012, 1, 1)).to.be.equal(1);
    }); 
    it("should return 32 for first of february 2000", function () {
        expect(dayOfYear(2012, 2, 1)).to.equal(32);
    });
    it("should return 61 for first of March 2000", function () {
        expect(dayOfYear(2012, 3, 1)).to.equal(61);
    });
    it("should return 60 for first of March 2017", function () {
        expect(dayOfYear(2017, 3, 1)).to.equal(60);
    });
    it("should return 91 for first of April 2017", function () {
        expect(dayOfYear(2017, 4, 1)).to.equal(91);
      });
});