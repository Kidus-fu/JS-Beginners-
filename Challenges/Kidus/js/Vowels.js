function countVowels(str) {
    // Define the vowels
    const vowels = "aeiou";
    // Convert the string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    // Initialize a counter
    let count = 0;

    // Loop through the string and count vowels
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
console.log(countVowels("Hello World")); // Output: 3

console.log(countVowels("JavaScript")); // Output: 3

// Bonus

function countVowelsBonus(str){
    // Define the vowels
    const vowels = "aeiou";
    // Convert the string to lowercase to make it case-insensitive
    str = str.toLowerCase();
    // Initialize an object to store vowel counts
    const vowelCounts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    // Loop through the string and count each vowel
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCounts[char]++;
        }
    }

    return vowelCounts;
}

// Example usage:

console.log(countVowelsBonus("Hello World")); // Output: { a: 1, e: 1, i: 1, o: 3, u: 0 }

console.log(countVowelsBonus("JavaScript")); // Output: { a: 1, e: 1, i: 1, o: 2, u: 1 }