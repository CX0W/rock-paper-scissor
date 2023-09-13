function getComputerChoice(){
    let a=Math.floor(Math.random()*3);
    if (a===0){
        console.log("Rock",0);
        return a;
    }
    else if (a===1){
        console.log("Paper",1);
        return a;
    }
    else{
        console.log("Scissor",2);
        return a;
    }
}
function getUserChoice(){
    let userchoice=prompt("Pick Rock or Paper or Scissor");
    let x;
    if (userchoice==="Rock"){
        x=0;
        console.log("Rock",x);
        return x;

    }
    else if (userchoice==="Paper"){
        x=1;
        console.log("Paper",x);
        return x;

    }
    else{//scissor
        x=2;
        console.log("Scissor",x);
        return x;

    }
}

function playround(playerselection,computerselection){
    console.log(playerselection,computerselection);
    if (playerselection===0 && computerselection===2){
        console.log("Rock beats Scissors");
    }
    else if (playerselection===1 && computerselection===0){
        console.log("Paper beats rock");
    }
    else if (playerselection===2 && computerselection===1){
        console.log("Scissor beats paper");
    }
    else{
        console.log("You lost");
    }
}
playround(getUserChoice(),getComputerChoice());
