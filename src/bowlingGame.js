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
        for (let frame = constants.ZERO; frame < constants.NUMBER_OF_FRAMES; frame++) {
            if (isStrike(rollPointer)) {
                score += constants.MAX_FRAME_SCORE + strikeBonus();
                rollPointer++;
            }
            else if (isSpare(rollPointer)) {
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
        document.getElementById(constants.SCOREBOARD).innerHTML = constants.EMPTY_STRING;
        document.getElementById(constants.INCREMENTAL_SCORE).innerHTML = constants.EMPTY_STRING;
        document.getElementById(constants.TOTAL_SCORE).innerHTML = constants.EMPTY_STRING;
        bowlingGame.scoreBoard = [];
        rollPointer = constants.ZERO;
    }

    function displayTotalScore(score) {
        document.getElementById(constants.TOTAL_SCORE).innerHTML = score;
    }

    function displayIncrementalScore(score) {
        document.getElementById(constants.INCREMENTAL_SCORE).innerHTML += score + constants.FRAME_DELIMITER;
    }

    function isScoreBoardGenerated() {
        return !bowlingGame.scoreBoard.length;
    }

    function spareBonus() {
        return bowlingGame.scoreBoard[rollPointer + constants.TWO];
    }

    function isSpare(roll) {
        return bowlingGame.scoreBoard[roll] + bowlingGame.scoreBoard[roll + constants.ONE] === constants.MAX_FRAME_SCORE;
    }

    function frameScore() {
        return bowlingGame.scoreBoard[rollPointer] + bowlingGame.scoreBoard[rollPointer + constants.ONE];
    }

    function isStrike(roll) {
        return bowlingGame.scoreBoard[roll] === constants.MAX_FRAME_SCORE;
    }

    function strikeBonus() {
        return bowlingGame.scoreBoard[rollPointer + constants.ONE] + bowlingGame.scoreBoard[rollPointer + constants.TWO];
    }

    this.generateScoreBoard = function () {        
        for (let roll = constants.ZERO; roll < constants.MAX_ROLL; roll++) {
            let score = generateRandomScore(roll);
            if( roll < constants.LAST_POSSIBLE_ROLL || should21stRollBeThere(roll)){
                bowlingGame.roll(score);
                displayScoreBoard(score, roll);
            }
        }
    }

    function should21stRollBeThere(roll) {
        return isStrike(constants.LAST_FRAME_ROLL) || isSpare(constants.LAST_FRAME_ROLL);
    }

    function displayScoreBoard(score, roll) {
        document.getElementById(constants.SCOREBOARD).append(score + (isEven(roll) ? constants.FRAME_DELIMITER : constants.ROLL_DELIMITER));
    }

    function generateRandomScore(roll) {
        let score;
        
        if (isEven(roll) && !isStrike(constants.LAST_FRAME_ROLL)) {
            score = Math.floor(Math.random() * (constants.ELEVEN - bowlingGame.scoreBoard[roll - constants.ONE]));
        }
        else {
            score = Math.floor(Math.random() * constants.ELEVEN);
        }
        return score;
    }

    function isEven(roll) {
        return roll % constants.TWO !== constants.ZERO;
    }
}