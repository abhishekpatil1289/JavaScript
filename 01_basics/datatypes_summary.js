/*
1) Primetative detatype

 7 types = String, Number, Boolean, Undefine, Null, Symbol, BigInt

2) Non-Premitive Number /or/ Refrence Premitive

Array, Object, Function
*/

const id = Symbol('233');
const num = Symbol('233')

// console.log(id)
// console.log(num)

// console.log(id === num)

// const bigint = 346163546146463644n

let bud = {
    name : "oneplue",
    age : "6 months"
}

const fun = function()
{
    console.log("hello world");
}

console.log(fun);
