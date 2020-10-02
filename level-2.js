//level-2.js


//question 1
var counter = 0;
for (counter = 15; counter < 26; counter++) {
    if (counter % 2 === 0) {
        console.log(counter);
    }
}


//question 2
function myFunction(function1) {
    console.log("I am a function");
}
var innerFunction = myFunction;

function outerFunction(argument1) {
    argument1();
}
outerFunction(innerFunction);