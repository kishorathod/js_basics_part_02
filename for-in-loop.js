 const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'rubby',
    swift:'swift by apple'
 }

 // now,lets apply for-in loop  on the above object 

 for(const key in myObject) 
 {
     console.log(key);  
 }

/* output ; js
cpp
rb
swift */

// if we want to get objects of keys 
for(const key in myObject)
{
  console.log(myObject[key]);
}
/* output : javascript
c++
rubby
swift by apple */

// if we want to print key value pairs then we write 

for(const key in myObject)
{
    console.log(`${key} shortcut is for ${myObject[key]} `)
}
/* output : 
js shortcut is for javascript 
cpp shortcut is for c++ 
rb shortcut is for rubby 
swift shortcut is for swift by apple  */


// +++++++++++++++++++ With the help of for-in loop we can not itterate the map(it shows the map is not itterable ) ++++++++++++++++++++++++

// Now we try to apply function on array elements 

const coading = ["js","rubby","java","python","cpp"];

coading.forEach(function(val){
    console.log(val);
})

/* output : 
js
rubby
java
python
cpp */

coading.forEach((item)=>{
    console.log(item);
})
/* output : 
js
rubby
java
python
cpp */


//+++++++++++++++++++ call back function+++++++++++++++++++++++++++++++++

function printMe (item)
{
    console.log(item);
}

coading.forEach(printMe);
/* output : 
js
rubby
java
python
cpp */

//+++++++++++++++++++++++++++++++++++ Objects inside the array +++++++++++++++++++++++++++++++++++++++++

const myCoading =[
    {
        languageName:"javascript",
        languagefileName : "js"
    },
    {
        languageName:"python",
        languagefileName : "py"
    },
    {
        languageName:"java",
        languagefileName : "java"
    },
]

// now we try to access values from this array & from each objects 

myCoading.forEach((items)=>{
    console.log(items.languageName);
})

/*output ;-
javascript
python
java
*/ 
