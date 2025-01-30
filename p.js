let allLowerCase = "abcdefghijklmnopqrstuvwxyz";
let allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%&*";

let allChars = "";
let genPassword;

allChars += allLowerCase;
allChars += allUpperCase;
allChars += allNumbers;
allChars += allSymbols;

let i = 1;
while (i <= 8) {
  genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
  i++;
  console.log(genPassword);
}
