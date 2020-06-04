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

const objFunc = {
  lower: getLow,
  upper: getUP,
  number: getNum,
  symbol: getSym,
};

function generatePassword(
  promptLength,
  confirmChar,
  confirmCHAR,
  confirmNum,
  confirmSpec
) {
  if (promptLength < 8 || promptLength > 128) {
    alert(
      "password needs to be at least 8 characters long and shorter than 128 chacters"
    );
    return;
  } else if (valueCount == 0) {
    alert(
      "Come on you need to have SOMETHING in your password, please choose your password preference."
    );
    return;
  }

  // try to create an array here to to loop GET functions over password length
  // then select random elements from the passArray using math.random to pick password. 

  let passArray = [];

  for (i = 0; i < promptLength; i++) {
    if (confirmChar) {
      passArray.push(getLow);
    } else if (confirmCHAR) {
      passArray.push(getUP);
    } else if (confirmNum) {
      passArray.push(getNum);
    } else if (confirmSpec) {
      passArray.push(getSym);
    }
    console.log(passArray);
  }
}

/*  another possible solution that i found online. It didn't work with my code and I do not understand most of the methods here . 

function generatePassword(passlength, char, CHAR, num, spe) {
      //   // link with GET functions so GET functions run when generatePassword is called
      //   // loop over length and call generatePassword function for each type
      //   // add final password and return it to password var.
      let generatedPassword = "";
      const valueCount = char + CHAR + num + spe;
      console.log("valueCount " + valueCount);
      const theArr = [{ char }, { CHAR }, { num }, { spe }].filter(
        (item) => Object.values(item)[0]
      );
      //I don't fully understand object filters yet.
      console.log(theArr);
      if (passlength < 8 || passlength > 128) {
        alert(
          "password needs to be at least 8 characters long and shorter than 128 chacters"
        );
        return;
      } else if (valueCount == 0) {
        alert(
          "Come on you need to have SOMETHING in your password, please choose your password preference."
        );
        return;
      }
      for (let i = 0; i < passlength; i += valueCount) {
        theArr.forEach((type) => {
          const funcName = Object.keys(type)[0];
          generatedPassword += objFunc[funcName];
        });
      }
      const finalpassword = generatedPassword.slice(0, passlength);
    return finalpassword;
    }
    
*/

// GET functions to get numbers/letters/symbols
function getLow() {
  let lowStr = "abcdefghijkelmnopqrstuvxyz";
  return lowStr[Math.floor(Math.random() * lowStr.length)];
}
function getUP() {
  let lowStr = "abcdefghijkelmnopqrstuvxyz";
  let upperStr = lowStr.toUpperCase();
  return upperStr[Math.floor(Math.random() * upperStr.length)];
}
function getNum() {
  let numbStr = "1234567890";
  return numbStr[Math.floor(Math.random() * numbStr.length)];
}
function getSym() {
  let symStr = "!@#$%^&*()_+-=~";
  return symStr[Math.floor(Math.random() * symStr.length)];
}

function generater(min = 0, max = 1) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

let arryPass = [getLow, getUP, getNum, getSym];

// console to check to see if things are working
console.log(getLow());
console.log(getUP());
console.log(getNum());
console.log(getSym());

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
