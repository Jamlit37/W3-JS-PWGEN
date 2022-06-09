var enter;
var confirmationNumber;
var confirmationSymbols;
var confirmationUppercase;
var confirmationLowercase;

symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [];

var selections;

var toUpper = function (x) {
    return x.toUpperCase();
};

Uppercase = Lowercase.map(toUpper);

