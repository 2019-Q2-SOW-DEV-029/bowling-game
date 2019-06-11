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
            if (roll < 20) {
                roll++;
                bowlingGame.roll(1);
            }
        }

        expect(bowlingGame.calculateScore()).toEqual(190);
    });

    it("should not return NaN if the scoreBoard is not generated", () => {
        expect(bowlingGame.calculateScore()).not.toBe(NaN);
    });

    it("should calculate score for perfect game", () => {
        for (let roll = 0; roll < 12; roll++) {
            bowlingGame.roll(10);
        }

        expect(bowlingGame.calculateScore()).toEqual(300);
    });

});

describe("Bowling game score generation", () => {

    document.body.innerHTML = ' <div>' +
        '<input type="button" id="startGame" value="Start" />' +
        '<div id = "incrementalScore" ></div> ' +
        '<div id="totalScore"></div>' +
        '</div>';

    it("should generate random score if the scoreboard is not populated", () => {
        bowlingGame.calculateScore();

        expect(bowlingGame.scoreBoard.length).not.toBe(0);
    });

    it("should display score on the screen", () => {
        bowlingGame.calculateScore();

        expect(document.getElementById("totalScore")).not.toBe("");
        expect(document.getElementById("incrementalScore")).not.toBe("");
    });

    it("should reset the game before starting", () => {
        bowlingGame.resetGame();

        expect(document.getElementById("totalScore").innerHTML).toEqual("");
        expect(document.getElementById("incrementalScore").innerHTML).toEqual("");
    });
});