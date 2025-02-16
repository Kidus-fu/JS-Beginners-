### **Find the Longest Word in a Sentence**

**Task:** Write a function that takes a sentence and returns the longest word. If there are multiple words with the same length, return the first one.

✅ **Example:**

```plaintext
console.log(longestWord("The quick brown fox jumps over the lazy dog"));  
// Output: "jumps"

console.log(longestWord("JavaScript is awesome"));  
// Output: "JavaScript"
```

💡 **Hint:** Use `.split(" ")` to break the sentence into words and loop through them.