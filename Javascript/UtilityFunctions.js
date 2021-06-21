/*
    Utility Functions -> https://www.youtube.com/watch?v=wWw1XQgK5pM
    Author: DevSage (Youtube) -> https://www.youtube.com/DevSage

    Utility functions are functions:
        1) that have no side effects
        2) with outputs that are directly dependent on their input
*/

// Not a utility function because it fails Step 1
function nonUtilityFunction()
{
    console.log("side effect");
    x = 3 // side effect
    localStorage.setItem("x", "y") // side effect
    document.body.append((document.createElement('div'))) // side effect
}

// Not a utility function because it fails Step 2
function nonUtilityFunction2(x)
{
    return Math.pow(x, 3) * Math.random() // output not directly dependent on input
}

console.log(nonUtilityFunction(3))

// Utility function
// 1) No side effects
// 2) Output directly dependent on it's input alone and not any random factor
function utilityFunction(x)
{
    return Math.sqrt(x);
}

console.log(utilityFunction(25)) // always 5