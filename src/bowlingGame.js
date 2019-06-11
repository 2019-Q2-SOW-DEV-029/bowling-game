const constants = require("./helpers/constants");

module.exports = bowlingGame;

function bowlingGame() {
    this.scoreBoard = [];
    let bowlingGame = this;
    let rollPointer = constants.ZERO;

    this.roll = function (pinsScored) {
        bowlingGame.scoreBoard.push(pinsScored);
    }

    this.calculateScore = function (resetGame) {
        let score = constants.ZERO;

        if (isScoreBoardGenerated() || resetGame) {
            bowlingGame.resetGame();

            bowlingGame.generateScoreBoard();
        }
        for (let frame = 0; frame < 10; frame++) {
            if (isStrike()) {
                score += constants.MAX_FRAME_SCORE + strikeBonus();
                rollPointer++;
            }
            else if (isSpare()) {
                score += constants.MAX_FRAME_SCORE + spareBonus();
                rollPointer += constants.TWO;
            }
            else {
                score += frameScore();
                rollPointer += constants.TWO;
            }
            displayIncrementalScore(score);
        }
        displayTotalScore(score);
        return score;
    }

    this.resetGame = function () {
        document.getElementById("incrementalScore").innerHTML = "";
        document.getElementById("totalScore").innerHTML = "";
        bowlingGame.scoreBoard = [];
        rollPointer = constants.ZERO;
    }

    function displayTotalScore(score) {
        document.getElementById("totalScore").innerHTML = score;
    }

    function displayIncrementalScore(score) {
        document.getElementById("incrementalScore").innerHTML += score + " || ";
    }

    function isScoreBoardGenerated() {
        return !bowlingGame.scoreBoard.length;
    }

    function spareBonus() {
        return bowlingGame.scoreBoard[rollPointer + constants.TWO];
    }

    function isSpare() {
        return bowlingGame.scoreBoard[rollPointer] + bowlingGame.scoreBoard[rollPointer + constants.ONE] === constants.MAX_FRAME_SCORE;
    }

    function frameScore() {
        return bowlingGame.scoreBoard[rollPointer] + bowlingGame.scoreBoard[rollPointer + constants.ONE];
    }

    function isStrike() {
        return bowlingGame.scoreBoard[rollPointer] === constants.MAX_FRAME_SCORE;
    }

    function strikeBonus() {
        return bowlingGame.scoreBoard[rollPointer + constants.ONE] + bowlingGame.scoreBoard[rollPointer + constants.TWO];
    }

    this.generateScoreBoard = function () {        
        for (let roll = 0; roll < 21; roll++) {
            bowlingGame.roll(generateRandomScore(roll));
        }
    }

    function generateRandomScore(roll) {
        let score;
        if (isEven(roll)) {
            score = Math.floor(Math.random() * (11 - bowlingGame.scoreBoard[roll - 1]));
        }
        else {
            score = Math.floor(Math.random() * 11);
        }
        return score;
    }

    function isEven(roll) {
        return roll % 2 !== 0;
    }
}