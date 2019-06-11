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
            if(isStrike()){
                score += 10 + strikeBonus();
                rollPointer++;
            }
            else{
                score += frameScore();
                rollPointer += 2;
            }
        }
        return score;
    }

    function frameScore() {
        return bowlingGame.scoreBoard[rollPointer] + bowlingGame.scoreBoard[rollPointer + 1];
    }

    function isStrike() {
        return bowlingGame.scoreBoard[rollPointer] === 10;
    }

    function strikeBonus(){
        return bowlingGame.scoreBoard[rollPointer + 1] + bowlingGame.scoreBoard[rollPointer + 2];
    }
}