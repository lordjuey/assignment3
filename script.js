// Assignment Code
let generateBtn = document.querySelector("#generate");
// Write password to the #password input
let passwordText = document.querySelector("#password");

function writePassword() {
  let promptLength = prompt("please type in the length of password");
  let confirmChar = confirm("would you like some lowercase?");
  let confirmCHAR = confirm("would you like some uppercase too?");
  let confirmNum = confirm("would you like some numbers there too?");
  let confirmSpec = confirm("what about some special cases yes or no?");
  //console.log values to see if inputs are working correctly
  const passlength = parseInt(promptLength);
  console.log(typeof passlength);
  console.log(promptLength, confirmChar, confirmCHAR, confirmNum, confirmSpec);

  passwordText.textContent = generatePassword(
    promptLength,
    confirmChar,
    confirmCHAR,
    confirmNum,
    confirmSpec
  );
}

function generatePassword(
  promptLength,
  confirmChar,
  confirmCHAR,
  confirmNum,
  confirmSpec
) {
  const passlength = parseInt(promptLength);
  console.log(typeof passlength);
  let valueCount = confirmChar + confirmCHAR + confirmNum + confirmNum;
  if (promptLength < 8 || promptLength > 128) {
    alert(
      "password needs to be at least 8 characters long and shorter than 128 chacters"
    );
    return;
  } else if (valueCount == 0) {
    alert(
      "Come on you need to have SOMETHING in your password, please choose your password preference."
    );
  }

  let passwordString = "";
  let refrenceString = "";
  if (confirmCHAR) {
    refrenceString += uppercaseLetters;
  }
  if (confirmChar) {
    refrenceString += lowercaseLetters;
  }
  if (confirmNum) {
    refrenceString += numbers;
  }
  if (confirmSpec) {
    refrenceString += specialCharacters;
  }
  for (i = 0; i < passlength; i++) {
    passwordString += getCharacter(refrenceString);
  }
  //trying to get rid of the ',' in the answer

  return passwordString;
}

let lowercaseLetters = "abcdefghijkelmnopqrstuvxyz";
let uppercaseLetters = lowercaseLetters.toUpperCase();
let numbers = "0123456789";
let specialCharacters = "!@#$%^&*()_+-=~";
//Now let's have a fuction that accepts a string of characters and picks a random chracter from it and it can be any of those functions that you created above with a slight modification as you have to pass the string of characters to it as a parameter
function getCharacter(characterString) {
  return characterString[Math.floor(Math.random() * characterString.length)];
}
//-----------------------------------------------------
function generater(min = 0, max = 1) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
// console to check to see if things are working
// console.log(getLow());
// console.log(getUP());
// console.log(getNum());
// console.log(getSym());
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
