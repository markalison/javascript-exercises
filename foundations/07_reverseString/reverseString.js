const reverseString = function(string) {
    let reversedString = [];
    let string2 = string.split("");
    let len = string2.length;
    for (let i = 1; i <= len; i++) {
        reversedString.push(string2.at(-i));
    }
    return reversedString.join("");
};

console.log(reverseString("asc"))

// Do not edit below this line
module.exports = reverseString;
