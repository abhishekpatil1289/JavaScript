let a = 10;
const b = 20;
var c = 30;

if (true) { 
    c = 500;
    console.log("condition scope",c)
}

console.log(a)
console.log(b)
console.log(c)