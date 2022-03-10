// Created geneateBtn and querySelcetor
var generateBtn = document.querySelector("#generate");

//Added Varibles to be able to generate password

var lowerCase = "abcdefghigklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLONOPQRSTUVWXYZ";
var numbersCase = "0123456789";
var specialCharactersCase = "!@#$%^&*()?><.,;:[{}]";

// Added Functions/confirms/for and var to be able to create password!

function generatePassword() {
  var finalPassword = "";
  var passwordLength = parseInt(
    prompt("How many Characters would you like your password to have?")
  );
  console.log(passwordLength);

  if (passwordLength >= 8 && passwordLength <= 128) {
    var isLowerCase = confirm(
      "Do you want to create lowercase in your password."
    );
    var isUpperCase = confirm(
      "Do you want to create uppercase in your password."
    );
    var isNumbersCase = confirm(
      "Do you want to create numeric case in your password."
    );
    var isSpecialCharactersCase = confirm(
      "Do you want to special characters numeric case in your password."
    );
    for (var i = 0; i < passwordLength; i++) {
      if (isLowerCase === true && finalPassword.length < passwordLength) {
        finalPassword = finalPassword + random(lowerCase);
      }
      if (isUpperCase === true && finalPassword.length < passwordLength) {
        finalPassword = finalPassword + random(upperCase);
      }
      if (isNumbersCase === true && finalPassword.length < passwordLength) {
        finalPassword = finalPassword + random(numbersCase);
      }
      if (isSpecialCharactersCase === true && finalPassword.length < passwordLength) {
        finalPassword = finalPassword + random(specialCharactersCase);
      }
    }
    
  } else {
    alert("Invaild entry charatcers between 8-128. ");
  }

  return finalPassword;
}

// Wrote password to the #password input unit
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function random(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  var randomElement = array[randomIndex];

  return randomElement;
}

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);
