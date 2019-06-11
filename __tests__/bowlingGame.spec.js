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

    it("should calculate the score for frames without bonus", () => {
        let roll = 0;
        for (; roll < 10; roll++) {
            bowlingGame.roll(1);
        }
        for (; roll < 20; roll++) {
            bowlingGame.roll(2);
        }

        expect(bowlingGame.calculateScore()).toEqual(30);
    });
});