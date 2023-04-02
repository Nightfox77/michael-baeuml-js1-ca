const form = document.querySelector(".formbox");
const fullName = document.querySelector("#name");
const mail = document.querySelector("#email");
const subject = document.querySelector("#subject");
const address = document.querySelector("#address");
const nameError = document.querySelector("#nameError");
const mailError = document.querySelector("#emailError");
const subjectError = document.querySelector("#subjectError");
const addressError = document.querySelector("#addressError");
const success = document.querySelector(".success");

function validateForm (){
    event.preventDefault();
    let allValid = false;
    if(lengthCheck(fullName.value, 0) === true) {
        nameError.style.display = "none";
    } 
    else {
        nameError.style.display = "block";
        allValid = false;
    }
    if(emailValidation(mail.value) === true){
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
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
    
    if(allValid === true) {
        success.innerHTML = `<h1 style="color:green">All inputs are valid</h1>`;
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
function emailValidation(emailValue) {
    const regEx = /\S+@\S+\.\S+/;
    const matchingPattern = regEx.test(emailValue);
    return matchingPattern;
}