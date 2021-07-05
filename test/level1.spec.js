const expect = require("chai").expect;
const level1 = require("../lib/level1");

// create a test for every function
it("test", function () {
  expect(level1.weekDay(1)).equal("Monday");
});
