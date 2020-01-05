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


//Validators
//----------first Name-------------------
function validateFirstName(){
    //check if is empty

    if(checkIfEmpty(firstName)) return;

    //is if it has only letters
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function validateLastName(){
    //check if is empty

    if(checkIfEmpty(lastName)) return;

    //is if it has only letters
    if(!checkIfOnlyLetters(lastName)) return;
    return true;
}

function validatePassword(){
    //check if is empty
    if(checkIfEmpty(password)) return;

    //Must of in certain length
    if(!meetLength(password, 6, 100)) return;

    //check password against our character set

    //1- a
    //2- a 1
    //3- A a 1
    //4- A a 1 @
    if(!containsCharacters(password, 4)) return;

    return true;
}


function validateConfirmPassword(){
    if(password.className !== "valid"){
        setInvalid(confirmPassword, "Password must be valid");
        return;
    }

    //If they match 

    if(password.value !== confirmPassword.value){
        setInvalid(confirmPassword, "Passwords must match");
        return;
    }else{
        setValid(confirmPassword);
    }
    return true;


}


//  Utility functions
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


function meetLength(field, minLength, maxLength){
    if(field.value.length >= minLength && field.value.length <= maxLength){
        setValid(field);
        return true;
    }else if(field.value.length < minLength){
        setInvalid(field,`${field.name} must be at least ${minLength} characters long`);
        return false;
    }else{
        setInvalid(field,`${field.name} must not be longer than ${maxLength} characters`)
        return false;

    }
    }

 

    function containsCharacters(field, code){
        let regEx;
        switch(code){
            case 1:
                    //letters
                    regEx=/(?=.*[a-zA-Z])/;
                    return matchWithRegEx(regEx,field, "Must contain at least one letter");
            case 2:
                    // At least one letter and one number
                    regEx=/(?=.*\d)(?=.*[a-zA-Z])/;
                    return matchWithRegEx(regEx,field, "Must contain at least one letter and one number");

            case 3:
                     // At least one uppercase letter, one lowercase letter and one number
                     regEx=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
                     return matchWithRegEx(regEx,field, "Must contain at least one uppercase letter, one lowercase letter and one number");
                   
            case 4:
                       // At least one uppercase letter, one lowercase letter, one number and one special character (symbol)
                     regEx=/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
                     return matchWithRegEx(regEx,field, "Must contain at least one uppercase letter, one lowercase letter, one number and one special character");

            default:
                return false;
        }
    }

    function matchWithRegEx(regEx, field, message){
        if(field.value.match(regEx)){
            setValid(field);
            return true;
        }else{
            setInvalid(field, message);
            return false;
        }
    }