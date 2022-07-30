// Assignment code here
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = [
  "a", 
  "b", 
  "c", 
  "d", 
  "e", 
  "f", 
  "g", 
  "h", 
  "i", 
  "j", 
  "k", 
  "l", 
  "m", 
  "n", 
  "o", 
  "p", 
  "q", 
  "r", 
  "s", 
  "t", 
  "u", 
  "v", 
  "w", 
  "x", 
  "y", 
  "z"]

// var Upper Case 
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map (toUpper);
var numbers = [0,1,2,3,4,5,6,7,8,9];
var special = [
  "!", 
  "#", 
  "$", 
  "%", 
  "&", 
  "'", 
  "(", 
  ")", 
  "*", 
  "+", 
  ",", 
  "-", 
  ".", 
  "/", 
  "\:", 
  "\;", 
  " < ", 
  "=", 
  " > ", 
  " ? ", 
  "@", 
  "[", 
  "\\", 
  "]", 
  " ^ ", 
  "_", 
  "`", 
  "{", 
  "|", 
  "}", 
  "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword(){
    // Ask for password length
  passwordLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.");
  console.log ("Password length " + passwordLength);

  if (!passwordLength){
    alert ("Required value");

  } else if (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt ("Password must be between 8 and 128 characters.");
    console.log ("Password Length " + passwordLength);

  } else {
    confirmUpper = confirm ("Click OK if you want your password to include upper case letters.");
    console.log ("Upper Case " + confirmUpper);

    confirmLower = confirm ("Click OK if you want your password to include lower case letters.");
    console.log ("Lower Case " + confirmLower);

    confirmNumber = confirm ("Click OK if you want your password to include numbers.");
    console.log ("Number " + confirmNumber);

    confirmSpecial = confirm ("Click OK if you want your password to include special characters.");
    console.log ("Special Character " + confirmSpecial);
  }

}
