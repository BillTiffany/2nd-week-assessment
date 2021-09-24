
//////////////////PROBLEM 1////////////////////
/*
  Create a function called 'sum' that takes in two parameters, 'num1' and 'num2'. 
  The function should return the sum of the two parameters.
*/

//CODE HERE
let sum
function add(a, b){
  Number(a, b)
  return sum=a + b
}
console.log(add(10,20))

//////////////////PROBLEM 2////////////////////
/*
  Create a function called 'greaterThanFive' that takes in a single parameter called 'number'. 
  Check to see if 'number' is greater than 5.
  If it is, return a true boolean. 
  If it's not, return a false boolean.
*/

//CODE HERE
function greaterThanFive(num){
  if(num>5){
  console.log(true)
}else{
  console.log(false)
}
}
greaterThanFive(1)

//////////////////PROBLEM 3////////////////////
/*
  Create a function called 'findZWords' that takes in one parameter, 'word'. 
  Your function should check to see if the name begins with the letter "Z"
  If the name does begin with Z, return the string: 'the name begins with Z'. 
  If the name does not begin with Z, return the string: 'the name does not begin with Z'.
*/

//CODE HERE
function findZWords(str){
  if(str.charAt(0)=="Z"){
    console.log("This name begins with an uppercase Z")
  }else if(str.charAt(0)=="z"){
    console.log('This name begins with a lowercase z')
  }else{
  console.log('this word does not begin with a Z')}
  
}
findZWords("zebra")
//////////////////PROBLEM 4////////////////////
/*
  Create a function called 'iLove' that takes in two string parameters, 'name' and 'love'. 
  Have the function take the two parameters and return a string that says 
  "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Joseph loves music"
*/

//CODE HERE

function iLove(){
let name="Joseph"
let love="loves"
console.log(`"${name} ${love} music"`)
}

iLove()