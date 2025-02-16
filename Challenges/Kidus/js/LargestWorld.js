function longestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");  
    let longest = "";  // Initialize an empty string to store the longest word

    // Loop through each word in the array
    for (let word of words) {
        // If the current word is longer than the stored longest word, update it
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;  // Return the longest word found
}

// Test Cases
console.log(longestWord("The quick brown fox jumps over the lazy dog"));  // Output: "jumps"
console.log(longestWord("JavaScript is awesome"));  // Output: "JavaScript"
