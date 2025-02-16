### **Validate a Strong Password**

**Task:** Write a function that checks if a password is **strong**. A strong password must:  
✅ Be at least **8 characters long**  
✅ Contain **at least one uppercase letter**  
✅ Contain **at least one number**  
✅ Contain **at least one special character** (!@#$%^&\*)

✅ **Example:**

```plaintext
console.log(isStrongPassword("Pass@123"));  // Output: true
console.log(isStrongPassword("weakpass"));  // Output: false
console.log(isStrongPassword("Hello123"));  // Output: false
```

💡 **Hint:** Use **regular expressions (**`**RegExp**`**)** to check conditions.