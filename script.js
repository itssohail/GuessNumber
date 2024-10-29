'use strict';

//generate a random number for the question mark:
prompt("write your name")
let generateNumber =Math.trunc(Math.random()*20)+1;

//set the score
let score = 20;
//set the high score:
let highscore=0;
//take input from user
document.querySelector(".check").addEventListener("click",function()
{
  const number = Number(document.querySelector(".guess").value);
  console.log(number);
  //when correct
  if(number===generateNumber)
  {
    document.querySelector(".message").textContent="Correct answer";
    //display when correct
    document.querySelector(".number").textContent=generateNumber;
    document.querySelector("body").style.backgroundColor="green";
    document.querySelector(".number").style.width="30rem";  
    if(score>highscore)
    {
      highscore=score;
      document.querySelector(".highscore").textContent=highscore ;
    }
  }
  else if(!number)
  {
    document.querySelector(".message").textContent="No number Entered";
    //update scores
  }
  else if(number !== generateNumber)
  {
    if(score>1)
      {
        document.querySelector(".message").textContent= number > generateNumber ? "Too high" : "Too low";
        score = score-1;
        document.querySelector(".score").textContent=score;
      }
      else{
        document.querySelector(".message").textContent="Game Over. You lost" ;
        document.querySelector("body").style.backgroundColor="red"; 
        document.querySelector(".score").textContent=0;
      }
  
  }
});

document.querySelector(".again").addEventListener("click",function()
{

  score=20;
  document.querySelector("body").style.backgroundColor="#222";
  document.querySelector(".message").textContent="Start guessing";
  document.querySelector(".guess").value="";
  document.querySelector(".number").textContent="?";
  generateNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector(".score").textContent=20;
  document.querySelector(".number").style.width="15rem";
  console.log(generateNumber);

});
