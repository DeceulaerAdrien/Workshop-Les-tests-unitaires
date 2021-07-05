const expect = require("chai").expect;
const level2 = require("../lib/level2");

describe("Simple Math", function () {
  describe("#return the good result", function () {
    it("should be a addition", function () {
      expect(level2.addition(1, 2)).to.be.equal(3);
    });

    it("should be a substraction", function () {
      expect(level2.substract(3, 2)).to.be.equal(1);
    });

    it("should be a multiplication", function () {
      expect(level2.multiplie(2, 2)).to.be.equal(4);
    });

    it("should be a division", function () {
      expect(level2.division(6, 3)).to.be.equal(2);
    });

    it("should be a percentage", function () {
      expect(level2.percentage(100, 200)).equal(100);
      expect(level2.percentage(100, 250)).equal(150);
      expect(level2.percentage(100, 50)).equal(-50);
    });
  });
});
