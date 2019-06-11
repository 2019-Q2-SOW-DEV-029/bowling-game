let BowlingGame = require("../src/bowlingGame");
let bowlingGame;

describe("Bowling game", () => {
    it("should have a function to calculate score ", () => {
        bowlingGame = new BowlingGame();
        
        expect(bowlingGame.calculateScore).toBeDefined();
    });
});