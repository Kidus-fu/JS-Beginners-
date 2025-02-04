// Get A Element In HTML
const loginForm = document.getElementById("loginForm")

loginForm.addEventListener("submit",(e) => LoginHandel(e))

const LoginHandel = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    // Create a new FormData object from the form element
    const data = new FormData(e.target);

    // Create an object to store the form data as key-value pairs
    const formDataObject = {};

    // Loop through the FormData and add each entry to the object
    for (let [key, value] of data.entries()) {
        formDataObject[key] = value;
    }

    // Log the JSON-like object
    console.log(JSON.stringify(formDataObject, null, 4));
}

