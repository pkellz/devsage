/*
    Polyfills -> https://www.youtube.com/watch?v=CJUAL18dbKs
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage
*/

const arr = [1,2,3,4,5]

// Simulate browser incompatibility
Array.prototype.forEach = null


if(!Array.prototype.forEach)
{
   Array.prototype.forEach = function(callbackFunction){
   
   for(let val of this)
        callbackFunction(val)
   }
}

arr.forEach((val) => {
    console.log(val * 2)
})