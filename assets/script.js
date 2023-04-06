//Criteria Arrays
var lowerArr = [
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
  "z",
];
var upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArr = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "<",
  ">",
  "/",
  ",",
  ".",
  "?",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  let numChars = askUser();
  var possibleChars = [];

  function askUser() {
    let numChars = prompt(
      "Please enter your desired password length with a value between 8-128"
    );
  
  if (numChars > 7 && numChars < 128) {
    alert("Success!");
  
  } else 
  if (numChars === null) {
    alert(
      "Input must be a number with a value between 8-128. Please try again"
    )
    numChars = askUser();
  } else {
    numChars = askUser();
  }
    return numChars;
  }

  let lower = confirm(
    "Do you want your password to contain lower case letters?"
  );
  let upper = confirm(
    "Do you want your password to contain upper case letters?"
  );
  let numeric = confirm("Do you want your password to contain numbers?");
  let special = confirm(
    "Do you want your password to contain special characters?"
  );

  if (lower) {
    possibleChars=possibleChars.concat(lowerArr);
  }
  if (upper) {
    possibleChars=possibleChars.concat(upperArr);
  }
  if (numeric) {
    possibleChars=possibleChars.concat(numericArr);
  }
  if (special) {
    possibleChars=possibleChars.concat(specialArr);
  }

  if (possibleChars.length === 0) {
    alert("No password criteria chosen. Please try again");
  }

var finalPassword = [];
var charsLength = possibleChars.length

for (var i = 0; i < numChars; i++) {
  var randomIndex = Math.floor(Math.random() * charsLength);
  var randomChar = possibleChars[randomIndex];
  finalPassword.push(randomChar);

}

  return finalPassword.join("");
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


