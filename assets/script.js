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

upperCase = lowerCase.map(toUpper);
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
function generatePassword() {
  // Ask password length
  passwordLength = prompt("How many characters would you like your password to be? Must be between 8 and 128.");
  console.log("Password length " + passwordLength);

  if (!passwordLength) {
    alert("Required value");

    // Password must be between 8-128 characters.
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must be between 8 and 128 characters.");
    console.log("Password Length " + passwordLength);

    // Ask for user password criteria
  } else {
    confirmUpper = confirm("Click OK if you want your password to include upper case letters.");
    console.log("Upper Case " + confirmUpper);

    confirmLower = confirm("Click OK if you want your password to include lower case letters.");
    console.log("Lower Case " + confirmLower);

    confirmNumber = confirm("Click OK if you want your password to include numbers.");
    console.log("Number " + confirmNumber);

    confirmSpecial = confirm("Click OK if you want your password to include special characters.");
    console.log("Special Character " + confirmSpecial);
  };

  // If user does not answer, at least one password criteria must be selected. If none are selected, restart application.
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose at least one password criteria.");
    return password;
  }
    
  // user 4 true choices 
  else if (confirmUpper && confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }

  // user 3 true choices
    else if (confirmUpper && confirmLower && confirmNumber) {
      userChoices = upperCase.concat(upperCase, numbers);
      console.log (userChoices);
    }
    else if (confirmUpper && confirmLower && confirmSpecial) {
      userChoices = upperCase.concat(upperCase, special);
    }
    else if (confirmUpper && confirmNumber && confirmSpecial) {
      userChoices = upperCase.concat(numbers, special);
    }
    else if (confirmLower && confirmNumber && confirmSpecial) {
      userChoices = upperCase.concat(numbers, special);
      console.log (userChoices);
    }

    // user 2 True choices 
    else if (confirmLower && confirmUpper) {
      userChoices = lowerCase.concat(upperCase);
      console.log (userChoices);
    }
    else if (confirmLower && confirmNumber) {
      userChoices = lowerCase.concat(numbers);
      console.log(userChoices);
    }
    else if (confirmLower && confirmSpecial) {
      userChoices = lowerCase.concat(special);
      console.log(userChoices);
    }
    else if (confirmUpper && confirmNumber) {
      userChoices = upperCase.concat(numbers);
      console.log (userChoices);
    }
    else if (confirmUpper && confirmSpecial) {
      userChoices = upperCase.concat(special);
      console.log(userChoices);
    }
    else if (confirmNumber && confirmSpecial) {
      userChoices = numbers.concat(special);
      console.log(userChoices);
    }

    // user 1 true choice
    else if (confirmUpper) {
      userChoices = blankUpper.concat(upperCase);
      console.log (userChoices);
    }
    else if (confirmLower) {
      userChoices = lowerCase;
      console.log(userChoices);
    }
    else if (confirmNumber) {
      userChoices = numbers;
      console.log (userChoices);
    }
    else if (confirmSpecial) {
      userChoices = special;
      console.log (userChoices);
    };

    // password length variable
    var passwordBnk = [];

    // randomly select a character from selected array 
    for (var i = 0; i < passwordLength; i++) {
      var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
      passwordBnk.push(allChoices);
      console.log(allChoices);
    }

    // Write password and return
    var password = passwordBnk.join("");
    console.log("Your Passwrod is: " + password);
    return password;

}
