

console.log("Welcome to the password Verifier Tool")
console.log("Please create a password that is at least 10 characters long")

const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pcheck =reader.output
function validatePassword(p) {
    const errors = [];
    if (p.length < 8) {
        errors.push("Your password must be at least 8 characters");
    }
    if (p.length > 32) {
        errors.push("Your password must be at max 32 characters");
    }
    if (p.search(/[a-z]/) < 0) {
        errors.push("Your password must contain at least one lower case letter."); 
    }
    if (p.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one upper case letter."); 
    }

    if (p.search(/[0-9]/) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
   if (p.search(/[!@#\$%\^&\*_]/) < 0) {
        errors.push("Your password must contain at least special char from -[ ! @ # $ % ^ & * _ ]"); 
    }
    if (errors.length > 0) {
        console.log(errors.join("\n"));
        return false;
    }
    return true;
}
reader.question(`Please Enter a Password you'd like to verify:`, password => {
    String(password);
    if(password.length >= 10){
        console.log("Your password has been verified");
        reader.close();
    }
    else {
        console.log('Your password is too short');
        reader.question(`Please Enter a Password you'd like to verify, remember it must be more than 10 characters:`, password => {
            String(password);
            if(password.length >= 10){
                console.log('password has been verified');
                reader.close();
            } else {
                console.log('too many failed attempts. Please try again in 1000000000000000000 hours.');
                reader.close();
    }}
)}})


