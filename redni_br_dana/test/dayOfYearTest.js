//const assert = require("chai").assert;
var assert = require('assert');
const dayOfYear = require("../dayOfYear.js");
var chai = require("chai");
var expect = chai.expect;
var should = chai.should;

//ako hocemo preskocit neki test onda stavimo describe.skip ili it.skip

describe("dayOfYear problem", function(){
    it("dayOfYear should be a function", function(){
        dayOfYear(1);
    });
    it("should return 1 if 01.01.2012.", function(){
        expect(dayOfYear(1, 1, 2012)).to.be.equal(1);
    }); 
    // it("should return 2 if 02.01.2000.", function(){
    //     expect(dayOfYear(2000, 1, 2)).to.be.equal(2);
    // });
    it("should return 32 if 01.02.2012.", function(){
        expect(dayOfYear(1,2,2012)).to.be.equal(32);
    });
    it("should return 61 if 01.03.2012.", function(){
        expect(dayOfYear(1,3,2012)).to.be.equal(61);
    });
    // it("should return 60 if 01.03.2001.", function(){
    //     expect(dayOfYear(2000, 4, 1)).to.be.equal(92);
    // });
});