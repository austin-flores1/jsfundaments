/**
 Scope

 1-grammarAndTypes
    03-scope.js
 */

/*
 What is scope?

 JS has both LOCAL and GLOBAL scope
 */

var x = 12;

function scope() {
    var x = 33;
    var y = 10;
    console.log(x);
}
scope();//logs 33
console.log(y);
console.log(x);//logs 12

