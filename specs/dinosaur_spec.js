var assert = require("assert");
var Dinosaur = require("../dinosaur");

describe("Dinsaur", function () {
  var dinsaur;

  beforeEach(function () {
    dinosaur = new Dinosaur("T-rex", 2);
  })

  it("should have a type", function () {
    assert.strictEqual(dinosaur.type, "T-rex");
  })

  it("should have a count of offspring per year", function () {
    assert.strictEqual(dinosaur.offspringPerAnnum, 2);
  })
})
