function isStrongPassword(password) {
    const minLength = password.length >= 8;  // Password must be at least 8 characters long
    const hasUppercase = /[A-Z]/.test(password);  // Checks if there is at least one uppercase letter
    const hasNumber = /\d/.test(password);  // Checks if there is at least one number (0-9)
    const hasSpecialChar = /[!@#$%^&*]/.test(password);  // Checks if there is at least one special character

    // Returns true only if all conditions are met
    return minLength && hasUppercase && hasNumber && hasSpecialChar;
}

// Test Cases
console.log(isStrongPassword("Pass@123"));  // Output: true (Valid strong password)
console.log(isStrongPassword("weakpass"));  // Output: false (No uppercase, number, or special character)
console.log(isStrongPassword("Hello123"));  // Output: false (No special character)
console.log(isStrongPassword("Secure*1"));  // Output: true (Meets all conditions)
