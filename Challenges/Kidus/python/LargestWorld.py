def longestWord(sentence):
    """
    This function takes a string as input and returns the longest word in the string.
    """
    words = sentence.split()
    longest_word = max(words, key=len)
    return longest_word

# Test

print(longestWord("Hello, World!"))   # Output: "World"
print(longestWord("Python is fun!"))  # Output: "Python"
print(longestWord("The quick brown fox jumps over the lazy dog."))  # Output: "quick"