module.exports = bowlingGame;

function bowlingGame() {
    this.scoreBoard = [];
    let bowlingGame = this;

    this.roll = function (pinsScored) {
        bowlingGame.scoreBoard.push(pinsScored);
    }

    this.calculateScore = function () {
        let score = 0;
        for (let roll = 0; roll < bowlingGame.scoreBoard.length; roll++) {
            score += bowlingGame.scoreBoard[roll];
        }
        return score;
    }
}