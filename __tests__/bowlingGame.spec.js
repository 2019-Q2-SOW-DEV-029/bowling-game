let BowlingGame = require("../src/bowlingGame");
let bowlingGame;

describe("Bowling game", () => {
    beforeEach(() => {
        bowlingGame = new BowlingGame();
    });

    it("should have a function to calculate score ", () => {
        expect(bowlingGame.calculateScore).toBeDefined();
    });

    it("should calculate the score for gutter game to 0", () => {
        expect(bowlingGame.calculateScore()).toEqual(0);
    });

});