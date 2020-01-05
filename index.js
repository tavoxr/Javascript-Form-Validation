//input fields

const firstName= document.querySelector("#firstName");
const lastName= document.querySelector("#lastName");
const password= document.querySelector("#password");
const confirmPassword= document.querySelector("#confirmPassword");
const email= document.querySelector("#email");
const btnSubmit= document.querySelector('btnSubmit');

//form
const form= document.querySelector("#myForm");

//Validation Colors
const green= '#4CAF50'; 
const red= "#F44336";

firstName.addEventListener("focusout",validateFirstName);
lastName.addEventListener('focusout',validateLastName);
password.addEventListener('focusout',validatePassword);
confirmPassword.addEventListener('focusout',validateConfirmPassword);
email.addEventListener('focusout',validateEmail);



//----------first Name-------------------
function validateFirstName(){
    //check if is empty

    if(checkIfEmpty(firstName)) return;

    //is if it has only letters
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function checkIfEmpty(field){
    if(isEmpty(field.value.trim())){
        //set field invalid
        setInvalid(field,`${field.name} must not be empty`);
    
        return true;
    }else{
        // set field valid
        setValid(field);
        return false;
    }
}

function isEmpty(value){

    if(value === ""){
        return true;
    }else{
        return false;
    }
}

function setInvalid(field, message){
    field.className="invalid";
    
    field.nextElementSibling.innerHTML= message;
    field.nextElementSibling.style.color=red;
}

function setValid(field){
    field.className="valid";
   
    field.nextElementSibling.innerHTML= "";
    // field.nextElementSibling.style.color= green;
    field.nextElementSibling.style.color=green;
}

function checkIfOnlyLetters(field){
    if(/^[a-zA-Z]+$/.test(field.value)){
        setValid(field);
        return true;
    }else{
        setInvalid(field, `${field.name} must not be empty`);
        return false;
    }
}