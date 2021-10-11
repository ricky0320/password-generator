// Assignment code here

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

var upperCase = window.confirm("Do you want upper case letter")

var lowerCase = window.confirm("Do you want lower case letters?");

var numb = window.confirm("Do you want numbers?");

var specialChar = window.confirm("Do you want special characters?");

var pLength = window.prompt("Welcome to Password Generator. Please select the length of Password. Your password must be 8 to 128 characters.");

var pLengthInt = parseInt(pLength);

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


if (pLengthInt >= 8 && pLengthInt <= 128) {
  function generatePassword() {
    var emptyString = "";
    var uCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lCase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var special = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

    if (upperCase === true) {
      emptyString += uCase;
    }

    if (lowerCase === true) {
      emptyString +=  lCase;
    }

    if (numb === true) {
      emptyString += numbers;
    }

    if (specialChar === true) {
      emptyString += special;
    }

    var password = "";
    for (var i = 0; i < pLengthInt; i++) {
      password += emptyString.charAt(Math.floor(Math.random() *  emptyString.length));
    }
    console.log(password);
    return password;
  }
} else {
  window.alert("Password must be between 8 and 128 characters.")
  generatePassword();
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}