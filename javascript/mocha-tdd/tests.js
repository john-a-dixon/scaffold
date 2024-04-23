const assert = require("assert");
const { altCase } = require("./app.js");
const exp = require("constants");

describe("Casing", () => {
  describe(".altCase", () => {
    let actual = "";

    // An example of the beforeEach hook. There are 3 others too.
    beforeEach(() => {
      actual = "";
    });

    it("returns alternating casing for a word", () => {
      // Setup
      const expected = "HeLlO";

      // Exercise
      actual = altCase("Hello");

      // Verify
      assert.strictEqual(expected, actual);

      // Teardown (can be done with a hook too)
    });

    it("returns alternating casing for a sentence", () => {
      // Setup
      const expected = "HeLlO To aLl!";

      // Exercise
      actual = altCase(expected);

      // Verify
      assert.strictEqual(actual, expected);

      // Teardown (can be done with a hook too)
    });
  });


/*
TDD Red-Green-Refactor Cycle
1. Red: Write tests that describe intended behavior. This will fail at first. 
   Implementation code is written in response to the failure.
2. Green:
*/
  describe(".invertCase", () => {
    it("inverts the casing of a word", () => {

    });
  });

});