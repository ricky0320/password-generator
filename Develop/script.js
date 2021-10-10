// Assignment code here

//1. Click button will generate password
//2. Add Prompt for difference CASE(SWITCH) before generating
//3. Add prompt for choosing a Length of 8-128 characters
//4. Add prompt for choosing include Upper/Lower case/number/special characters or not
//5. At least one character type should be select when user input (4.)
//6. Password matches selected criteria
//7. window.alert(generated password)


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var promptPassword = window.prompt('Please choose your password criteria.');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)