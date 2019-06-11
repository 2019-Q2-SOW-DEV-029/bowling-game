var BowlingGame = require("./bowlingGame");

var bowlingGame = new BowlingGame();

window.onload = function() {
    document.getElementById("startGame").addEventListener('click', (event) => {
        event.preventDefault();
        bowlingGame.calculateScore(true);
    });

}