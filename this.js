const user = {
    username:"hitesh",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username},Welcome to website`); // this keyword helps to refer the current contest 
        console.log(this); // this prints whatewar the contest is present inside this object 
    }
}

user.welcomeMessage();

user.username ="sam"
user.welcomeMessage();


console.log(this); //  this is returning an object 


 // in a browser the gloabal object is window 
 // in node the the object is empty object 


 // ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //we now create an function and try to print the this inside the console 

//  function chai()
//  {
//     let username ="hitesh";
//     console.log(this); // if we try to print this inside the function in node envirment then we will obtain lots of values 
//  }

//  chai();


 // if we do this 
//  function chai()
//  {
//     let username ="hitesh";
//     console.log(this.username); //  output: undefined (we can see our contest is only working inside the object ,we can not access it within the function
//  }
//     chai();


// +++++++++++++++++++++++++++++++++++++++++ Now we see how to declare the function using the arrow functions +++++++++++++++++++++++++

// declaring the functions 
// Method 01(normal function declaration)

// const chai = function()
// {
//   
//     let username ="hitesh";
//     console.log(this.username); //  output:undefined 
// }

// chai();

// Method 2(array function declaratioin)

// const chai = () =>{
//    let username ="hitesh";
//     // console.log(this.username); //  output:same undefined 
//     console.log(this); // { }
// }
// chai();


// small difference between normal function and arrow  function is (this  is a global object in normal function and this is empty object in arrow function)

// ++++++++++++++++++++++++++  inmplicit return(in one line statement we dont need to write a paranthesis and return keyword) +++++++++++++++
// in explicite return (we need to write return keyword)
// const addTwo = (num1,num2) => (num1 + num2 );



// if we want to return the object from the function 
// here is the example 

const addTwo1 = (num1 , num2) => ({username:"hitesh"});

console.log(addTwo1(3,4)); // output : { username: 'hitesh' }

