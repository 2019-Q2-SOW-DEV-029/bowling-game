module.exports = bowlingGame;

function bowlingGame() {
    this.scoreBoard = [];
    let bowlingGame = this;
    let rollPointer = 0;

    this.roll = function (pinsScored) {
        bowlingGame.scoreBoard.push(pinsScored);
    }

    this.calculateScore = function () {
        let score = 0;
        for (let frame = 0; frame < 10; frame++) {
            if(bowlingGame.scoreBoard[rollPointer] === 10){
                score += 10 + bowlingGame.scoreBoard[rollPointer + 1] + bowlingGame.scoreBoard[rollPointer + 2];
                rollPointer++;
            }
            else{
                score += bowlingGame.scoreBoard[rollPointer] + bowlingGame.scoreBoard[rollPointer + 1];
                rollPointer += 2;
            }
        }
        return score;
    }
}