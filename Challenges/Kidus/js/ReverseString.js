/*
Explanation:
Remove spaces: The replace(/\s+/g, "") part removes all spaces from the string. The regular expression \s+ matches any whitespace character (spaces, tabs, newlines), and the g flag ensures it removes all occurrences.

Reverse the string: The split('') method splits the string into an array of characters, reverse() reverses the array, and join('') combines the characters back into a string.
*/

function reverseString(inputString) {
    // Remove spaces from the string
    let inputStringWithoutSpaces = inputString.replace(/\s+/g, "");
    
    // Reverse the string
    let reversedString = inputStringWithoutSpaces.split('').reverse().join('');
    
    return reversedString;
}

//Test
console.log(reverseString("hello"));           // Output: "olleh"
console.log(reverseString("hello world"));    // Output: "dlrowolleh"
console.log(reverseString(" a b c d e "));    // Output: "edcba"
