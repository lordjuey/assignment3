// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let promptLength = prompt("please type in the length of password");
  let confirmChar = confirm("would you like some lowercase?");
  let confirmCHAR = confirm("would you like some uppercase too?");
  let confirmNum = confirm("would you like some numbers there too?");
  let confirmSpec = confirm("what about some special cases yes or no?");

  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//functions to get numbers/letters/symbols
function getLow() {
  let lowStr = "abcdefghijkelmnopqrstuvxyz";
  return lowStr[Math.floor(Math.random() * lowStr.length)];
}
function getUP() {
  let lowStr = "abcdefghijkelmnopqrstuvxyz";
  let upperStr=lowStr.toUpperCase();
  return upperStr[Math.floor(Math.random() * upperStr.length)];
}
function getNum() {
  let numbStr = "1234567890";
  return numbStr[Math.floor(Math.random() * numbStr.length)];
}
function getSym(){
    let symStr="!@#$%^&*()_+-=~"
    return symStr[Math.floor(Math.random()*symStr.length)];
    }


//console to check to see if things are working
console.log(getLow());
console.log(getUP());
console.log(getNum());
console.log(getSym());


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generateP(){
//     let promptLength=prompt("please type in the length of password");
//     return promptLength;
//     console.log(promptLength);
// }
