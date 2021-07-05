const expect = require("chai").expect;
const level3 = require("../lib/level3");

describe("Array manipulation", function () {
  describe("#return the good result", function () {
    it("should reverse the array result", function () {
      let array = [1, 2, 3, 4, 5];
      expect(level3.inversion(array)).eql([5, 4, 3, 2, 1]);
    });

    it("should be convert to a string", function () {
      let array = ["Bonjour", "tout", "le monde"];
      expect(level3.convert(array)).equal("Bonjour tout le monde");
    });

    it("should delete the first and last index", function () {
      let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      expect(level3.deleteFirstLast(array)).eql([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      ]);
    });

    it("should delete only the third index and convert to a string", function () {
      let array = ["BeCode", "are", "not", "funny"];
      expect(level3.deleteOne(array)).eql("BeCode are funny");
    });

    it("should sort number pair", function () {
      let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      expect(level3.pair(number)).eql([2, 4, 6, 8, 10]);
    });
  });
});
