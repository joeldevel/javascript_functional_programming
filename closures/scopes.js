//////////////////////////////////////////////////////////////////
//
//   name: scope.js
//   purpouse: leanr about scopes and closures
//   date: August 2020
//   author: joeldevel
//   usage: in the console run : node scope.js
//
///////////////////////////////////////////////////////////////////


// Let's learn something about inner functions

let importantThing = "I am a global thing";

function outerFunction( someArg) {

  let outerFunctionVariable = "I am a variable from inside the outerFunction";

  function innerFunction() {
    let innerFunctionVariable = 45;
    console.log( "Im the innerFunction and can access this: ", importantThing);
    console.log( "and also this: ",outerFunctionVariable);
    console.log( "and of course this, my own variables: ", innerFunctionVariable );
    console.log( "but  also this argument passed to the outerFunction: ", someArg);
  }

  // Call the innerFunction
  innerFunction();
}

// Call the outerFunction
outerFunction( "Potato crips" );

// but we cannot call the innerFunction
// innerFunction() yields:
// ReferenceError: innerFunction is not defined

