
describe("Initial set up", () => {
    it("should run without error", () => {
        expect(true).toBe(true);
    });
});
describe("Screen events", () => {
    it("should call calculateScore on click of Start button", () => {
        document.body.innerHTML = '<div><input type="button" id="startGame" value="Start" /></div> ';
        var BowlingGame = require("../src/bowlingGame");
        var bowlingGame = new BowlingGame();
        bowlingGame.calculateScore = jest.fn();
        document.getElementById("startGame").addEventListener('click', (event) => {
            event.preventDefault();
            bowlingGame.calculateScore();
        });

        document.getElementById("startGame").click();

        expect(bowlingGame.calculateScore).toHaveBeenCalled();
    });
});