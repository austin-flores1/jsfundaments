/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a variable?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables:
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters, but cannot come first
//3) JavaScript is case sensitive

/*
DECLARATIONS, INITIALIZATION, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare' a variable

Initialization refers to when a variable is assigned a value

Assignment refers to giving a value. This can be after initialization
*/

var x;
console.log("declaration 1:" , x); //undefined

x = 10;
console.log("initialization 1:" ,x); //10

x=33;
console.log("assignment 1:", x);//33

var y;
console.log(y);

y="hello";
console.log(y);

y="you are my friend";
console.log(y);

/*
Var, let, and const:

Var= "old" keyword for variables
Let= "new" keyword for variable (introduced with ES6)
const= also "new", declares unchangeable variables
*/

let tonight = 'great!';
const elevenFifty = 'amazing!'
console.log(tonight, elevenFifty);

tonight= 'lovely!';
console.log(tonight, elevenFifty);

