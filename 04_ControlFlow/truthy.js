/*

Falsy Values = false, 0, -0, "", null, undefine , BigInt 0n, Nan

Truthy Values = true, 1, "0", " ", [], {}, function(){}

*/

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    // console.log("condition true");
}


// Nullish Coaleshing operator (??) 
// this operator work for NUll and UNDEFINE only (if value comes in Null OR Undefine then it igonre the null or undefine and accept the next value)

// const val = null ?? 10;
// const val1 = 5 ?? 10;

val1 = undefined ?? 7 ?? 2;
//  it alway accepte the first value which comes before undefine or null
// console.log(val1)


// TERNORY VALUE

const ticket = 100;

ticket <= 80 ? console.log("grater than 80") : console.log("less that 80") 