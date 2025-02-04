def countVowels(str:str) -> None:
    vowels = ['a', 'e', 'i', 'o', 'u']
    vowel_count = 0
    for char in str.lower():
        if char in vowels:
            vowel_count += 1
    print(f"The number of vowels in the string '{str}' is: {vowel_count}")
    
# Test the function

countVowels("Hello, World!") 
countVowels("Python is fun!")
countVowels("The quick brown fox jumps over the lazy dog.")


# Bonus 

def countVowelsBonus(str:str) -> dict :
    vowels = ['a', 'e', 'i', 'o', 'u']
    vowel_count = {vowel: 0 for vowel in vowels}
    for char in str.lower():
        if char in vowels:
            vowel_count[char] += 1
    return vowel_count

# Test the function

print(countVowelsBonus("Hello, World!"))
print(countVowelsBonus("Python is fun!"))
print(countVowelsBonus("The quick brown fox jumps over the lazy dog."))