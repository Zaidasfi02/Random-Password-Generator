const inputSlider = document.querySelector("#inputSlider");
const sliderValue = document.querySelector("#sliderValue");
const passBox = document.querySelector(".passBox");
const lowerCase = document.querySelector("#lowerCase");
const upperCase = document.querySelector("#upperCase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generateBtn = document.querySelector(".generateBtn");
const copyIcon = document.querySelector("#copyIcon");

sliderValue.innerHTML = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.innerHTML = inputSlider.value;
});
generateBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let allLowerCase = "abcdefghijklmnopqrstuvwxyz";
let allUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%&*";
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowerCase.checked ? allLowerCase : "";
  allChars += upperCase.checked ? allUpperCase : "";
  allChars += numbers.checked ? allNumbers : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    alert("Please select atleast one checkbox");
  }

  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

copyIcon.addEventListener("click", () => {
  if (passBox.value != "") {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.innerText = "check";
  }
});
