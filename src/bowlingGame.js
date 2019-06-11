const constants = require("./helpers/constants");

module.exports = bowlingGame;

function bowlingGame() {
    this.scoreBoard = [];
    let bowlingGame = this;
    let rollPointer = constants.ZERO;

    this.roll = function (pinsScored) {
        bowlingGame.scoreBoard.push(pinsScored);
    }

    this.calculateScore = function () {
        let score = constants.ZERO;
        if (isScoreBoardGenerated()) {
            return constants.ZERO;
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
        }
        return score;
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
}