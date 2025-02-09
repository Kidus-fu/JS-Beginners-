function removeDuplicates(arr) {
    let uniqueArr = []; // Create an empty array to store unique values
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) { // If the value is not already in uniqueArr
            uniqueArr.push(arr[i]); // Add it to uniqueArr
        }
    }
    return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); 
// Output: [1, 2, 3, 4, 5]

console.log(removeDuplicates(["apple", "banana", "apple", "orange", "banana"])); 
// Output: ["apple", "banana", "orange"]

// Using a set

function removeDuplicatesUsingSet(arr) {
    let uniqueSet = new Set(arr); // Create a Set from the array
    return [...uniqueSet]; // Convert the Set back to an array
}

