const Kelvin = 300; // Constant value of Kelvin
const Celsius = Kelvin - 273; // Converting from Kelvin to Celsius; 
let Fahrenheit = Celsius * (9/5) + 32; //C to f
Fahrenheit = Math.floor(Fahrenheit); //Rounded F to lowest integer
console.log(`The temperature is ${Fahrenheit} degrees Fahrenheit!`);
let Newton = Celsius * (33/100);
Newton = Math.floor(Newton);
console.log(`The temperature is also ${Newton} Newtons!`);
