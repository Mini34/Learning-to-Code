let userName = "Mina" ;
userName ? console.log(`Hello ${userName}!`) : console.log("Hi there!");
let userQuestion = "hi what is your name?" ;
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8) + 1;
let eightBall = "";
switch (randomNumber) {
    case 1:
    console.log('It is certain');
    break;
  case 2:
    console.log('It is decidedly so');
    break;
  case 3:
    console.log('Reply hazy try again');
    break;
  case 4:
    console.log('Cannot predict now');
    break;
  case 5:
    console.log('Do not count on it');
    break;
  case 6:
    console.log('Outlook not so good');
    break;
  case 7:
    console.log('Outlook not so good');
    break;
  case 8:
    console.log('Signs point to yes');
    break;
  default:
    console.log("Oh no!! Oh no!!!");
    break;
}
  
