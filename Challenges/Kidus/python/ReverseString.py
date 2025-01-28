def reverse_string(input_string):
    """
    Removing spaces: We use replace(" ", "") to remove all spaces from the input string.
    Reversing the string: After removing the spaces, we use slicing ([::-1]) to reverse the string.
    """
    # Remove spaces from the string
    input_string_without_spaces = input_string.replace(" ", "")
    
    # Reverse the string
    reversed_string = input_string_without_spaces[::-1]
    
    return reversed_string
# Test
print(reverse_string("hello"))   # Output: "olleh"
print(reverse_string("hello world"))  # Output: "dlrowolleh"
