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
// function game(){
//     for (let i=0;i<5;i++){
//         console.log(playround(getUserChoice(),getComputerChoice()));
//     }
// }
// game();
let userPoints=0;
let compPoints=0;
function point(str){
    if (str==="Same choices, try again"){
        //nothing
    }
    else if (str==="You win! Rock beats scissor"|| str==="You win! Paper beats rock"|| str==="You win! Scissor beats paper"){
        userPoints++;
    }
    else{
        compPoints++;
    }

}

const rock=document.createElement('button');
const paper=document.createElement('button');
const scissor=document.createElement('button');
const result=document.createElement('div');
const points=document.createElement('div');
rock.textContent = 'Rock';
paper.textContent = 'Paper';
scissor.textContent = 'Scissor';

// Get the container element by its ID
const container = document.getElementById('buttonContainer');

// ...

// Append the button elements to the container
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissor);

// Append the result div below the buttons
container.appendChild(result);
container.appendChild(points);

function check(){

    if (userPoints===5){
        const winner=document.createElement('h1');
        winner.textContent="You have won the game!"
        points.appendChild(winner);
    }
    else if (compPoints===5){
        const winner=document.createElement('h1');
        winner.textContent="You have won the game!"
        points.appendChild(winner);
    }
}
rock.addEventListener('click', function() {
    result.textContent = playround(0, getComputerChoice());
    point(result.textContent);
    points.textContent= `${userPoints}-${compPoints}`;
    check();
});

paper.addEventListener('click', function() {
    result.textContent = playround(1, getComputerChoice());
    point(result.textContent);
    points.textContent= `${userPoints}-${compPoints}`;
    check();
});

scissor.addEventListener('click', function() {
    result.textContent = playround(2, getComputerChoice());
    point(result.textContent);
    points.textContent= `${userPoints}-${compPoints}`
    check();
});
