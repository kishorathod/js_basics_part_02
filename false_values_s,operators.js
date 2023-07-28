// falsy values : 0,false , -0, BigInt 0n , "",null,undefined,NaN

// turthy values : "0", "false", "space", [], {}, function(){}

// detecting whether object and array are empty or not 
// object : 
//  if(Object.key(emptyObj).length === 0)
// {
//    console.log("object is empty");
// }

// Array :
// if(userEmail.length === 0)
// {
//     console.log("Array is empty");
// }

// nullish coalescing operator (??) :- null , undefined 

// let val1;
// val1 = 5 ?? 10 , // output: 5
// val1 = null??10 , // output: 10
// val1 = undefined ?? 15 // output : 15

// val1= null ?? 10 ?? 15 // output: 10

// console.log(val1);

// terenary operator (//condition ? true:false)

// ternary operator to check the eligibility to vote
let age = 15;

let result = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote yet";
    
console.log(result);