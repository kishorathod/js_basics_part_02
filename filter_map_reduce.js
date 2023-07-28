// filter method 

const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNumbers1 = myNums.filter((num)=> num > 4);

console.log(newNumbers1); // output : [ 5, 6, 7, 8, 9, 10 ]

// Map method 

const myNumbers = [1,2,3,4,5,6,7,8,9,10];
const newNumbers2 = myNumbers.map((num) =>num+10);
console.log(newNumbers2);  
/* output : [
    11, 12, 13, 14, 15,
    16, 17, 18, 19, 20
  ] 
*/

// method Chaining 

const myNumber = [1,2,3,4,5,6,7,8,9,10];

const newNumbers3 = myNumber 
                      .map((num)=>num*10)
                      .map((num)=>num+1)
                      .filter((num)=>num >= 40);

console.log(newNumbers3);

/* output: 
[
  41, 51,  61, 71,
  81, 91, 101
]
*/

// reduce method :
/* the reduce () method executes a user-supplied "reducer" callback function on each element of the array ,
in order , passing in the return value from the calculation in the proceding element .... */

// ex -01 

// const myNum1 = [1,2,3];

// const myTotal = myNum1.reduce(function (accumulater,myNum){
//     console.log(`accumulater: ${accumulater} and currentvalue:${myNum}`);
//     return accumulater+ myNum;
// },0)

// console.log(myTotal);
 
/* output : 
accumulater: 0 and currentvalue:1
accumulater: 1 and currentvalue:2
accumulater: 3 and currentvalue:3
6
*/


// writing the above function into the arrow function 
const myNum = [1,2,3];

const myTotal1 = myNum.reduce((acc,num)=>acc+num,0)

console.log(myTotal1); // the output is 6 


//++++++++++++++++++++++++ We Now try to implement the use of the reduce method in the real world project +++++++++++++++++++++++++++++++++++++++

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"python course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:5999
    },
    {
        itemName:"datascience course",
        price:12999
    }
     
]

const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0);

console.log(priceToPay); // output : 22996 