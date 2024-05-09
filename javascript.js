//random number for the computer
function getComputerChoice(){
    let cchoice = ["rock", "paper", "scissors"];
    let random = cchoice[Math.floor(cchoice.length*Math.random())];
    return random;
}
//human imput function, returns the human imput in lowercase
function getHumanChoice(){
    let hchoice= prompt("rock, paper, scissors");
    if (hchoice === null) {
        return null;
    } 
    let hchoicelow = hchoice.toLowerCase();
    if (hchoicelow !== "rock" && hchoicelow !== "paper" && hchoicelow !== "scissors"){
        return "invalid input";
    } else{
    return hchoicelow;
    }
}

/*scores that will be ++ by the playround() to be */
 let humanscore = 0;
 let computerscore = 0;

/* takes the two previous functions as parameters
 and runs them throught the if logic */
function playround(humanchoice, computerchoice){
    if (humanchoice === computerchoice){
        return "It's a tie!";
    } else if ((humanchoice === "rock" && computerchoice === "scissors") ||
               (humanchoice === "paper" && computerchoice === "rock") ||
               (humanchoice === "scissors" && computerchoice === "paper")){
        humanscore++; // Human wins
        return "Human wins!";
    } else {
        computerscore++; // Computer wins
        return "Computer wins!";
    }
}


//passing the functions in variables 
let humanc = getHumanChoice();
let computerc = getComputerChoice();


// init the functionpassing the variables as arguments

do {
    console.log(playround(humanc, computerc));
  } while (humanscore < 5 && computerscore < 5);

//console log scores and picks the picks
console.log("human:" + humanc);
console.log("computer:" + computerc);
console.log("human score:" + humanscore);
console.log("computer score:" + computerscore);


