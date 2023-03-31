const form = document.querySelector(".formbox");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const addressError = document.querySelector("#addressError");
const success = document.querySelector(".success");

function validateForm (){
    event.preventDefault();
    const allValid = true;
    if(lengthCheck(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } 
    else {
        nameError.style.display = "block";
        allValid = false;
    }
    if(lengthCheck(subject.value, 10) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block"; 
        allValid = false;
    }
    if(lengthCheck(address.value, 25) === true) {
        addressError.style.display = "none";
    }
    else {
        addressError.style.display = "block";
        allValid = false;
    }
    if(emailValidation(email.value) === true){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
        allValid = false;
    }
    if(allValid === true) {
        success.innerHTML += `<h1 style="color:green">All inputs are valid</h1>`;
    } 
}

form.addEventListener("submit", validateForm); 

function lengthCheck(value, len) {
    if(value.trim().length > len) {
        return true;
    }
    else {
        return false;
    }
}
function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matchingPattern = regEx.test(email);
    return matchingPattern;
}