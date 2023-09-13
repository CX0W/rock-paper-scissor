function getComputerChoice(){
    let a=Math.floor(Math.random()*3);
    if (a===0){
        //console.log("Rock",0);
        return a;
    }
    else if (a===1){
        //console.log("Paper",1);
        return a;
    }
    else{
        //console.log("Scissor",2);
        return a;
    }
}
function getUserChoice(){
    let userchoice=prompt("Pick Rock or Paper or Scissor");
    let x;
    if (userchoice.toLowerCase()==="rock"){
        x=0;
        //console.log("Rock",x);
        return x;

    }
    else if (userchoice.toLowerCase()==="Paper"){
        x=1;
        //console.log("Paper",x);
        return x;

    }
    else{//scissor
        x=2;
        //console.log("Scissor",x);
        return x;

    }
}

function playround(playerselection,computerselection){
    console.log(playerselection,computerselection);
    if (playerselection===computerselection){
        //console.log("Same choices, try again");
        return ("Same choices, try again");

    }
    else if (playerselection===0){
        if (computerselection===1){
            //console.log("You lose! Paper beats rock")
            return ("You lose! Paper beats rock");
        }
        else{
            //console.log("You win! Rock beats scissor")
            return ("You win! Rock beats scissor");
        }
    }
    else if (playerselection===1){
        if (computerselection===0){
            //console.log("You win! Paper beats rock")
            return("You win! Paper beats rock");
        }
        else{
            //console.log("You lose! Scissor beats paper")
            return ("You lose! Scissor beats paper");
        }
    }
    else if (playerselection===2){
        if (computerselection===1){
            //console.log("You win! Scissor beats paper")
            return ("You win! Scissor beats paper");
        }
        else{
            //console.log("You lose! Rock beats scissor")
            return ("You lose! Rock beats scissor");
        }
    }
}
function game(){
    for (let i=0;i<5;i++){
        console.log(playround(getUserChoice(),getComputerChoice()));
    }
}
game();