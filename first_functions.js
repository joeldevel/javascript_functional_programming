// ES6 brings us some new ways of creating funcions:
// anonymous function and arrow functions
function aFunction( argument ) {
  return argument ;
}
console.log( aFunction( "hello") );

// Could be
let something = "Reality is fake.";
// aVariable holds the value returned by the anonymous function
const aVariable = function ( something) {
  return something;
}
console.log( something );

// But this is another way called arrow function
// We create a constant which is equal to a function
// receiving an argument which returns the argument
const result = (argument) => {
   return argument ;
 };
 // We call the function
console.log( result(something) );
// If there is just one argument and the return statement
// spreads just one line we can shorten the function
const shortFunction = argument => argument.toUpperCase();

// shortFunction works like any function
const name = "policletos";
let nameUpper = shortFunction(name);
console.log( nameUpper );
