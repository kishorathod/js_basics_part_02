// IIFE(inmedeatly invoked function expression)

function chai()
{
    console.log("DB connected");
}

// if we want to immedeatly invoke the obve function then we write  the above function like this 

// this is example for the iife 
(
    function chai()
{
    console.log("DB connected");
}
)();

// here our ()first paranthesis is the function defination and the ()second paranthesis is the function expression

// here is the q :  why we use IIFE 
// Ans : by using iife we can save ourselve from polluting by the global scope 


// here is the intresting thing 
// if we write arrow function inside iife 

(
  () => 
{
    console.log("DB connected");
}
)();

// then we will get error 

// here is the conclusion we can not write the arrow functions inside iife 

//++++++++++++++++++++++++ If we want to write more than one iife function one after one then we should write then in the following way ++++++++++++++++++++++++++++++++

(
    function chai()
    // named iife 
{
    console.log("DB connected");
}
)();  // we must and should add the semicolun here to stop this iife  function and start exicuting remening function

(
(name) =>
{
    console.log(`DB connected Tow ${name}`);
}
)("rathod")  // this is unnamed iife 

