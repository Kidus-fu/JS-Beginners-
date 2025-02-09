function findLargest(arr) {
    let largest = arr[0]; // Assume the first number is the largest
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update largest if a bigger number is found
        }
    }
    return largest;
}

console.log(findLargest([3, 7, 2, 8, 5])); // Output: 8
console.log(findLargest([-1, -5, -3, -10])); // Output: -1

function findLargest(arr) {
    return Math.max(...arr); // Spread the array into individual numbers
}

console.log(findLargest([3, 7, 2, 8, 5])); // Output: 8
console.log(findLargest([-1, -5, -3, -10])); // Output: -1
