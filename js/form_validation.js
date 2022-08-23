const clearErrors = () => {
    errors = document.querySelectorAll('.formerror');
    errors.forEach(error => {
        error.innerText = '';
    })
}

const setError = (id, message) => {
    const element = document.getElementById(id);
    element.innerText = message;
}

const formValidateSignUp = () => {
    let returnVal = true;
    clearErrors();
    let name = document.forms["signUpForm"]["name"].value;
    let email = document.forms["signUpForm"]["email"].value
    let aadhaar = document.forms["signUpForm"]["aadhaar"].value
    let contact = document.forms["signUpForm"]["contact"].value
    let pass = document.forms["signUpForm"]["pass"].value
    let cpass = document.forms["signUpForm"]["cpass"].value
    
    if (name.length < 4) {
        returnVal = false;
        setError("name", "*Name should have atleast 4 characters")
    }

    if (!email.endsWith("jecrc.ac.in")) {
        returnVal = false;
        setError("email", "*Please enter your valid college ID");
    }

    if (aadhaar.length != 12) {
        returnVal = false;
        setError("aadhaar", "*Enter valid aadhaar number");
    }    

    if (contact.length != 10) {
        returnVal = false;
        setError("contact", "Enter valid contact number")
    }

    if (pass.length < 8) {
        returnVal = false;
        setError("pass", "*Password should be minimum of 8 characters")
    }

    if (pass !== cpass) {
        returnVal = false;
        setError("cpass", "*Password did not match")
    }

    return returnVal;
}

const validateLogin = () => {
    let returnVal = true;
    clearErrors()

    let name = document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;

    if (!name.endsWith("jecrc.ac.in")) {
        returnVal = false;
        setError("email", "*Enter valid college mail ID")
    }

    if (password.length < 8) {
        returnVal = false;
        setError("password", "*Password should be minimum of 8 characters")
    }

    return returnVal;
}