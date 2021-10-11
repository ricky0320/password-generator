// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var upperCase = confirm("Do you want upper case letter")

var lowerLetter = confirm("Do you want lower case letters?");

var pLength = window.prompt("Welcome to Password Generator. Please select the length of Password. Your password must be 8 to 128 characters.")

var 

// Define the missing generatePassword function
function generatePassword() {
  console.log("Testing!");
  


   
    
  // Ask for password length within 8-128
  var chooseLength = window.prompt("Welcome to Password Generator. Please select the length of Password. Your password must be 8 to 128 characters.")
    if (chooseLength < 8 || chooseLength > 128) {
      window.alert("Please select a valid password length.");
      return generatePassword();
    }
   
    var askCriteria = function() {
      // Ask for password criteria
      var input = window.prompt("Please select a Password Criteria. Enter 1 for numbers, 2 for special characters.")
      // convert answer from prompt to integer option
      input = parseInt(input);
      // use switch case for options
      switch (input) {
        case 1:
          random(passwordStyle.numbers);
          break;
        case 2:

          break;

        case 3:

          break;
          default:
            window.alert("You did not pick a valid option. Try again.");
            askCriteria();
            break;
      }
    }
    askCriteria();
    // }
    // if (input === "" || input === null) {
    //   window.alert("Please select a valid option");
    //   return (input);
    
    
  

  // 2.   Validate input
  // 3.   Generate Password
  // 2.  Set password length limit


  // 4.  Display Password
  return "Generated Password";
  
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
    window.alert("Your password is " + password);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var passwordStyle = {
  numbers: ['0','1','2','3','4','5','6','7','8','9'],

}