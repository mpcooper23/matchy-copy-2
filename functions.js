/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*  1. Open up the file `functions.js` in your editor.
 - Implement a function declaration called `search` that:
 - Takes a paramater representing an Array of `animals`.
 - Takes a paramater representing a String, the name of an animal on which to perform a search.
 - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.
 - Returns `null` if no animal with that name exists
3. Use the search bar at the top of the page to make sure your function works./*
*/

function search(animals, string){
for(let i = 0; i < animals.length; i++){
    if (animals[i].name === string){//make sure to use dot notation to access animals name
        return animals[i]
    }
}
return null
}




/*//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
 2. Preview the `index.html` page to test it on the website.
*/

function replace(animals, name, replacement){
    for (let i = 0; i < animals.length; i++){
        if(animals[i].name === name) {//again, needs dot notation to access the animal name
            animals[i] = replacement
        }
    }

}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
   - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.
   - If an animal with that name exists within the `animals` Array, remove it.
 2. Test that it works on the website.*/

 function remove(animals, name){
for(let i = 0; i < animals.length; i++){
    if(animals[i].name === name){
        animals.splice(i, 1) //NOT animals[i].splice(1), but animals.splice(i, 1)
    }
} return animals
 }




//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
Write a function declaration called add with a signature of add(animals, animal) { //... } that:
Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
Checks that the animal Object has a name property with a length > 0.
Checks that the animal Object has a species property with a length > 0.
Has a unique name, meaning no other animals have that name.
Adds this new Object to the animals Array, only if all the other conditions pass.
Make sure it works.

I: array and object
O:
C: conditional statements for name, species
E:
*/

function add(animals, animal) {
    // Check if the animal has a valid name and species
    if (animal.name && animal.name.length > 0 && animal.species && animal.species.length > 0) {
      // Check if the animal already exists in the array
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].name === animal.name) {
          return; // Exit if the animal already exists
        }
      }
      // Add the new animal to the array
      animals.push(animal);
    }
  }
  


/*WRONG:

function add(animals, animal){
for (let i = 0; i < animals.length; i++){
    if(animals[i].name && animals.name.length > 0){
if(animals[i].species && animals.species.length > 0){
if(animals[i].name !== animals.name){
    animals.push(animal)
}
}
    }
}
}*/


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}