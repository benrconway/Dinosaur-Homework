var Park = function () {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeByType = function (typeString) {
  var dinosaursToKeep = [];
  for(var dinosaur of this.enclosure) {
    if(dinosaur.type !== typeString) {
      dinosaursToKeep.push(dinosaur);
    }
    this.enclosure = dinosaursToKeep;
  }
};

Park.prototype.corralHeavyBreeders = function () {
  var heavyBreeders = [];
  for(var dinosaur of this.enclosure) {
    if(dinosaur.offspringPerAnnum > 2) {
      heavyBreeders.push(dinosaur);
    }
  }
  return heavyBreeders;
};

Park.prototype.calculateGrowth = function (numberOfYears) {
  var dinosaurCount = 0;
  var potentialGrowthPerYear = 0;
  for(var dinosaur of this.enclosure) {
    potentialGrowthPerYear += dinosaur.offspringPerAnnum;
    dinosaurCount++;
  }

}

module.exports = Park;
