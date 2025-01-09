//! without parameters

function demo(){
    console.log("function is executing.....");

}
demo(4,5,6);

//! function with parameters and arguments
//! let a = 10; // a=parameter, 10=arguments
5,6
8,9
3,4
function add(a,b){
    console.log(a+b);
}
add(5,6);
add(8,9);
add(3,4);
// named function
function test(){
    console.log("named function is executing");
}
test();

//function expression
let x = function(){
    console.log("ananymous is not executing");
}
//console.log(x);
x();

// IFE
// {
//     function(){
//         console.log("IIFE");
//     }
// }();

// arrow function
// let x =a_=>console.log("Arrow function");
// x();

//implicit and explicit return
function test1(a,b){
    return a+b;
}
console.log(test1(5,5));
let x = (a,b) => {return a*b};
console.log(x(5,5));

let y = (a,b) => a +b;
console.log(y(100,200));
