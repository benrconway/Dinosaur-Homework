var assert = require("assert");
var Dinosaur = require("../dinosaur");
var Park = require("../park");

describe("Park", function () {
  var park;
  var dino1;
  var dino2;
  var dino3;

  beforeEach(function () {
    park = new Park();
    dino1 = new Dinosaur("T-rex", 1);
    dino2 = new Dinosaur("Diplodicus", 3);
    dino3 = new Dinosaur("Triceratops", 3);
  })

  it("should have an empty array called enclosure to begin with", function () {
    assert.strictEqual(park.enclosure.length, 0);
  })

  it("should be able to add a dinosaur to the array", function () {
    park.addDinosaur(dino1);
    assert.strictEqual(park.enclosure.length, 1);
  })

  it("should remove all dinosaurs of a designated type", function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.removeByType("Triceratops");
    assert.strictEqual(park.enclosure.length, 4);
  })

  it("can get the dinosaurs which have offspring of more than 2/year", function () {
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    park.addDinosaur(dino1);
    park.addDinosaur(dino3);
    var dinosaursWhichHaveOverTwoOffspring = park.corralHeavyBreeders().length;
    var knownNumberOfDinosaurs = 2;
    assert.strictEqual(dinosaursWhichHaveOverTwoOffspring, knownNumberOfDinosaurs);

  })

  it("can calculate the increase in park dinosaur population", function () {
    park.addDinosaur(dino1);
    var expectedOutcome = 2;
    assert.strictEqual(park.calculateGrowth(1), expectedOutcome)
  })
})
