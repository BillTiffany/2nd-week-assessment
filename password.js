console.log("Welcome to the password Verifier Tool")
console.log("Please enter a new password")
console.log("Please create a password that is at least 10 characters long")

const { SSL_OP_NO_QUERY_MTU } = require('constants');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("What is your New password?", function(input){
    tokens = input.split(' ');
    console.log('')
            console.log('num1')

            if ("" < 10) {
                console.log("password is too short.");
            }
        }
        reader.close()
    }