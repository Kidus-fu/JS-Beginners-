def findLargest(arry:list) -> int:
    """
    This function takes a list of integers as input and returns the largest integer in the list.
    """
    if not arry:
        return None
    
    largest = arry[0]
    for num in arry:
        if num > largest:
            largest = num
    
    return largest

# Test the function

print(findLargest([5, 2, 9, 1, 7]))  # Output: 9
print(findLargest([-3, -5, -1, -2, -8]))  # Output: -1
print(findLargest([]))  # Output: None

            