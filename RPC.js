console.log('Welcome! The choices are Rock, Scissors, and Paper.')
const getUserChoice = (userInput) => {
  userInput= userInput.toLowerCase().trim(); 
  if (userInput === 'rock' || userInput === 'scissors' ||userInput === 'paper' || userInput === 'bomb')  {
    return userInput; 
    } else {
    console.log('Not a valid option try again');
    return null; 
  }
};
let userChoice = getUserChoice('rock');
const getComputerChoice = () => {
  let RandNum = Math.floor(Math.random() * 3)
  switch (RandNum) {
    case (0):
    return 'rock';
    case (1):
    return 'scissors';
    case (2):
    return 'paper';
    default: 
    return 'rock'; }
}

let computerChoice = getComputerChoice();
function determineWinner (userChoice,computerChoice) {
  if (userChoice ==='bomb') {
    console.log("You cheated :< but still won yay!") // Secret Cheat code
    return;
  }
  console.log(`1,2,3 you chose ${userChoice} and the computer chose ${computerChoice}!` );
  if (!userChoice) {
    console.log("Haha you didn't even try I win!");
  } else if (userChoice === computerChoice){
      console.log(`Wow! That is unexpected you both chose ${computerChoice}`);
  } else if (userChoice === 'paper' && computerChoice ==='scissors') {
      console.log(`You lose! Scissors beats paper.`);
  } else if (userChoice === 'paper' && computerChoice ==='rock') {
    console.log(`You win! Paper beats rock.`);
  } else if (userChoice === 'scissors' && computerChoice ==='rock' ) {
            console.log(`You lose! Rock beats scissors.`);
  } else if (userChoice === 'scissors' && computerChoice ==='paper' ) {
          console.log(`You win! Scissors beats paper.`);
  }else if (userChoice === 'rock' && computerChoice ==='paper' ) {
          console.log(`You lose! Paper beats rock.`);
  } else if (userChoice === 'rock' && computerChoice ==='scissors' ){
        console.log(`You win! Rock beats scissors.`);
  }
};
determineWinner(userChoice, computerChoice);

