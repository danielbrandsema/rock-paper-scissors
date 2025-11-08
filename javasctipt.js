function getRandomInt(min, max) {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(4);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const a = "rock";
const b = "paper";
const c = "scissors";

function getComputerChoice(a,b,c) {
    if (getRandomInt() == 1) {
        return a;
    } else if (getRandomInt() == 2) {
        return b;
    } else return c;
 }

 console.log(getComputerChoice(a,b,c));  
