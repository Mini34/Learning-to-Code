let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let RunnerAge = 19;
if (RunnerAge >= 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`Start 9:30am! Your race number is: ${raceNumber}`);
} else if (RunnerAge >=18 && !registeredEarly) {
 console.log(`Start 11:00am! Your race number is: ${raceNumber}`);
} else {
console.log(`Start 12:30am! Your race number is: ${raceNumber}`);  }
