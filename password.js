console.log("Welcome to the password Verifier Tool")
console.log("Please create a password that is at least 10 characters long")

const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question(`Please Enter a Password you'd like to verify:`, password => {
    String(password);
    if(password.length >= 10){
        console.log("Your password has been verified");
        reader.close();
    }
    else {
        console.log('Your password is too short');
        reader.question('What password would you like to validate?', password => {
            String(password);
            if(password.length >= 10){
                console.log('password has been verified');
                reader.close();
            } else {
                console.log('too many failed attempts. Please try again in 1000000000000000000 hours.');
                reader.close();
    }}
)}})
