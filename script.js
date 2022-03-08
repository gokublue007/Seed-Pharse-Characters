// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  window.prompt("How many Characters would you like your passwork to have?");
  if (!userChoice) {
    return;
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
