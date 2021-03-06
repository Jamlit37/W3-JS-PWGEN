// Starter element names
var enter;
var confirmationNumber;
var confirmationSymbols;
var confirmationUppercase;
var confirmationLowercase;
var selections;
 
// Setting up all values for each category
Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Space to be used in Uppercase conversion
space = [];

var toUpper = function (x) {
    return x.toUpperCase();
};
 // Used this line instead of rewriting Uppercase alphabet
Uppercase = Lowercase.map(toUpper);


//Starting code for when "Generate Password" button is pressed
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
    ps = writePassword();
    document.getElementById("#password");
});

// Setting up prompts making sure to keep them inbetween 8 - 128
function writePassword() {
    enter = parseInt(prompt("Please choose how many characters would you like your password? Must be between 8 and 128"));

    if (!enter) {
        alert("Please choose a value");

    } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("Selection must be between 8 and 128"));

     //Next questions to ask if they would like to include each category 
    } else {
        confirmationUppercase = confirm("Will your password contain uppercase letters?");
        confirmationLowercase = confirm("Will your password contain lowercase letters?");
        confirmationNumber = confirm("Will your password contain numbers?");
        confirmationSymbols = confirm("Will your password contain special characters?");
    };

    // Start of large if else code to cover all possible category selections
    if (!confirmationUppercase && !confirmationLowercase && !confirmationNumber && !confirmationSymbols) {
        selections = alert("You must choose a criteria!");
    
    } else if (confirmationUppercase &&confirmationLowercase && confirmationNumber && confirmationSymbols) {
        selections = Uppercase.concat(Lowercase, numbers, symbols);
    
    } else if (confirmationUppercase && confirmationNumber && confirmationSymbols) {
        selections = Uppercase.concat(Lowercase, symbols);
    
    } else if (confirmationLowercase && confirmationNumber && confirmationSymbols) {
        selections = Lowercase.concat(numbers, symbols);
    
    } else if (confirmationUppercase && confirmationLowercase && confirmationSymbols) {
        selections = Uppercase.concat(Lowercase, symbols);
    
    } else if (confirmationUppercase && confirmationLowercase && confirmationNumber) {
        selections = Uppercase.concat(Lowercase, numbers);
    
    } else if (confirmationNumber && confirmationSymbols) {
        selections = numbers.concat(symbols);

    } else if (confirmationLowercase && confirmationSymbols) {
        selections = Lowercase.concat(symbols);

    } else if (confirmationUppercase && confirmationSymbols) {
        selections = Uppercase.concat(symbols);

    } else if (confirmationLowercase && confirmationNumber) {
        selections = Lowercase.concat(numbers);

    } else if (confirmationUppercase && confirmationLowercase) {
        selections = Uppercase.concat(Lowercase);

    } else if (confirmationUppercase && confirmationNumber) {
        selections = Uppercase.concat(numbers);

    } else if (confirmationUppercase) {
        selections = space.concat(Uppercase);
    
    } else if (confirmationLowercase) {
        selections = Lowercase;
    
    } else if (confirmationNumber) {
        selections = numbers;
    
    } else if (confirmationSymbols) {
        selections = symbols;
    };

    // After all categories selected the for loop generates password based on criteria
    var password = [];

    for (var i = 0; i < enter; i++) {
        var pickSelections = selections[Math.floor(Math.random() * selections.length)];
        password.push(pickSelections);
    }
 
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// Password inputted into "Your Secure Password" placeholder
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}
