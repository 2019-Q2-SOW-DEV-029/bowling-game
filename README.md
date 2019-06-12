# Bowling Game

### Problem Description

We can briefly summarize the scoring for this form of bowling:
* Each game, or “line” of bowling, includes ten turns, or “frames” for the bowler.
* In each frame, the bowler gets up to two tries to knock down all the pins.
* If in two tries, he fails to knock them all down, his score for that frame is the total number of pins knocked down in his two tries.
* If in two tries he knocks them all down, this is called a “spare” and his score for the frame is ten plus the number of pins knocked down on his next throw (in his next turn).
* If on his first try in the frame he knocks down all the pins, this is called a “strike”. His turn is over, and his score for the frame is ten plus the simple total of the pins knocked down in his next two rolls.
* If he gets a spare or strike in the last (tenth) frame, the bowler gets to throw one or two more bonus balls, respectively. These bonus throws are taken as part of the same turn. If the bonus throws knock down all the pins, the process does not repeat: the bonus throws are only used to calculate the score of the final frame.
* The game score is the total of all frame scores.


## Get Started

To install the project, execute following command:
<b>npm install</b>  

To run the project, execute following command:
<b>npm start</b>

To run the test cases, execute following command:
<b>npm test</b>

To launch this application go to this link:
<b>http://localhost:8085/</b>

_______________________________________________________________________________

<b>Note:</b>
* Please note that the score board is generated randomly on click of Start button.
* Since the scores are generated randomly, it is possible when you run the tests the coverage doesn't show 100% as some of the conditions might have been left out because of random numbers. But if it is run for a few more times it would be 100% at least one of the times. 
* Since the probability of having perfect game from random score is bleak, extra test for perfect game and all spare game is added.
* Incremental score, displayed on UI, is not the frame score but the addition of scores till that particular frame. I have added it for the ease of calculating while verification. 



