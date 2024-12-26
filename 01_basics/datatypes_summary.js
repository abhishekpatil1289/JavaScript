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
    // console.log("hello world");
}

// console.log(fun);



// primitive data type Examples 

let a = 5;
let b = a ;
b = 7 ;
// console.log(b)

/*
In the above example i provide the a value to the b 
and again i change the value of "b" which dosent effect on "a" value because its a primetive datatype which always refers the copy to the anohter variable 
// [ String, Number, Boolean, Undefine, Null, Symbol, BigInt ] this are stored in Stack Memory
Stack memory Provide Copy and Heap Provide Refrence always keep in mind
*/


let ab = {
    name : "buds",
    size : 4
}

let bc = ab;
bc.name = "onePlus";

console.log(bc)
/*
In the above example i provide the "ab" value to the "bc" 
and again i change the value of "bc.name" then it also effects on "ab" object also because, Object is Non-Preative DataType which directly gives the refrenct from the Heam Memory 
// Array , Function, Object are stored in Heap Function 
*/