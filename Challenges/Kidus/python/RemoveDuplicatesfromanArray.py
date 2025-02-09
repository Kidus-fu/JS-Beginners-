def removeDuplicates(arry):
    """
    Remove duplicates from a given array using a dictionary.
    """
    # Create an empty dictionary to store unique elements
    unique_dict = {}
    
    # Iterate through the array
    for element in arry:
        # Check if the element is already in the dictionary
        if element not in unique_dict:
            # Add the element to the dictionary
            unique_dict[element] = True
    
    # Convert the dictionary back to a list
    unique_list = list(unique_dict.keys())
    
    return unique_list

# Test the function

print(removeDuplicates([1, 2, 3, 2, 1, 4, 5]))  # Output: [1, 2, 3, 4, 5]
print(removeDuplicates(["apple", "banana", "apple", "cherry", "banana"]))  # Output: ["apple", "banana", "cherry"]

print(removeDuplicates([1, 2, 3, 4, 5, 5, 5, 5, 5]))  # Output: [1, 2, 3, 4, 5]