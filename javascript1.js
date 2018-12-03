let playerWins = 0;
let computerWins = 0;
let numberOfDraws = 0;
let numberOfRounds = 0;
let result = "";

function computerPlay() {
let randomNumber = (Math.random()*10+1);
	if (randomNumber <= 3) {
		return "Rock"
	} else if( randomNumber > 3 && randomNumber < 7) {
		return "Paper"
	} else {
		return "Scissor"
	}
}


function playRound(playerSelection,computerSelection){
    numberOfRounds++;
	playerSelection = playerSelection.toLowerCase();
	if (playerSelection.search("scissors") != -1) {
		playerSelection = "scissor"
		}
    computerSelection = computerSelection.toLowerCase();
   
	if (playerSelection == computerSelection){
	    numberOfDraws++
	    return "It's a Draw!"
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
	    playerWins++
	    return "You WIN!, Rock beats Scissors!"
    } else if (playerSelection == "rock" && computerSelection == "paper") {
    	computerWins++
    	return "You LOSE!, Paper beats Rock!"
    } else if (playerSelection == "paper" && computerSelection == "scissor") { 
    	computerWins++
    	return "You LOSE!, Scissors beats Paper!"
    } else if (playerSelection == "paper" && computerSelection == "rock") { 
    	playerWins++
    	return "You WIN!, Paper beats Rock!"
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
	    computerWins++
		return "You LOSE!, Rock beats Scissors!"
		
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
	    playerWins++
		return "You WIN!, Scissors beats paper!"
	}
}

function game(){
    const t_h1 = document.querySelector('.game');
    const r_br = document.createElement('br');
    const r_div = document.createElement('div');
    const r_br2 = document.createElement('br');
    const r_results = document.createElement('b');

    t_h1.appendChild(r_br);

    const buttons = document.querySelectorAll('input');

    buttons.forEach((input) => {
        input.addEventListener('click', function(e){
	        r_results.textContent = playRound(e.target.value,computerPlay())
	        r_results.style.color = "black"
	        r_div.textContent = "You : " + playerWins + "; Computer :" + computerWins + "; Draws : " + numberOfDraws + "; Rounds : " + numberOfRounds;
	        t_h1.appendChild(r_div);
	        t_h1.appendChild(r_br2);
	        t_h1.appendChild(r_results);
	        if ( numberOfRounds >= 9 ) {
		        if (playerWins>computerWins) {
		        	r_results.textContent = "WOW! You won the match! You can try again by clicking any of the buttons"
	    	    	r_results.style.color = "green"
	    	    	t_h1.appendChild(r_results);
	    	    }else if (computerWins>playerWins) {
	    	    	r_results.textContent = "Darn it! You lost in this match. You can try again by clicking any of the buttons"
	    	    	r_results.style.color = "red"
		        	t_h1.appendChild(r_results);
	    	    } else {
    		    	r_results.textContent = "It's a DRAW!. You can try again by clicking any of the buttons"
	    	    	r_results.style.color = "grey"
		        	t_h1.appendChild(r_results);
    		    }
	            numberOfRounds = 0;
	                playerWins = 0;
                computerWins = 0;
                numberOfDraws = 0;	
	        }   
        });
    });
}
game()


