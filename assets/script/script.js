var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter the length of the password (8-128 characters):");
  passwordLength= parseInt(passwordLength);


var includeLowercase = confirm("Include lowercase characters?")
var includeUppercase = confirm("Include uppercase characters?");
var includeNumeric = confirm("Include numeric characters?");
var includeSpecialChars = confirm("Include special characters?");
  
  while (!(includeLowercase || includeUppercase || includeNumeric || includeSpecialChars)) {
    alert("Please select at least one character type.");
    
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?.");
    includeSpecialChars = confirm("Include special characters?");
  }
  
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";
  
  var characterPool = "";
  if (includeLowercase) {
    characterPool += lowercaseChars;
  }
  if (includeUppercase) {
    characterPool += uppercaseChars;
  }
  if (includeNumeric) {
    characterPool += numericChars;
  }
  if (includeSpecialChars) {
    characterPool += specialChars;
  }
  
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool.charAt(randomIndex);
  }
  
  return password;
}
