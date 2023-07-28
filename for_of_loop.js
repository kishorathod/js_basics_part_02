 // for - of loop is very convinient way to itterate the array,  objects & strings (because array,object,strings are itterable )

// lets see an simple example 
const arr =[1, 2, 3 , 4];

for (const i of arr) {
    // console.log(i); // output : 1 2 3 4 
}

// now we try to apply the for-of loop  on the string 

const greetingMessage = "hello world!";

for (const  i of greetingMessage) {
  //   console.log(i);
}

//++++++++++++++++++++++++++++ Maps in js ++++++++++++++++++++++++++++++++++++++++++

/* Maps is a object which holds key-value pairs and remembers the original insertion order of the keys 
in the map no duplecate values are allowed to be store (values must be unique) */

// lets see an example of the map

const map = new Map(); // way of creating a map 

map.set('En',"India");
map.set('usa',"united states of america");
map.set('fr',"france");

console.log(map); /* output
 Map(3) {
    'En' => 'India',
    'usa' => 'united states of america',
    'fr' => 'france'
  }
  */

//+++++++++++ Now we try to apply for-of loop on the map  ++++++++++++++++

for(const [key,value] of map)
{
    console.log(key,":-",value);
}
 /* output : 
En :- India
usa :- united states of america
fr :- france
*/

//===================================== If we try to write above syntax for object ==========================================

const myObject = {
    game1:'NFS',
    game2:'spiderman'
}

for(const [key,value] of myObject)
{
    console.log(key,":-",value);  // this will produce an error (it shows an object is not itterable in this way (there are other ways to itterate the object))
} 

