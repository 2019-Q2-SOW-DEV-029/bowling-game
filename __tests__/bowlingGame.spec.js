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
        for (let roll = 0; roll < 21; roll++) {
            bowlingGame.roll(0);
        }

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
    
    it("should calculate score with strike bonus", () => {
        for (let roll = 0; roll < 10; roll++) {
            bowlingGame.roll(2);
        }
        for (let roll = 0; roll < 7; roll++) {
            bowlingGame.roll(10);
        }

        expect(bowlingGame.calculateScore()).toEqual(170);
    });

    it("should calculate score with spare bonus", () => {
        for (let roll = 0; roll < 21; roll++) {
            bowlingGame.roll(9);
            if(roll < 20){
                roll++;
                bowlingGame.roll(1);
            }
        }

        expect(bowlingGame.calculateScore()).toEqual(190);
    });

    it("should not return NaN if the scoreBoard is not generated", () => {
        expect(bowlingGame.calculateScore()).not.toBe(NaN);
    });
});