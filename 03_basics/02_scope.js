let a = 10;
const b = 20;
var c = 30;

if (true) {
    c = 500;
    // console.log("condition scope", c)
}

// console.log(a)
// console.log(b)
// console.log(c)


//Hoisting

Game(4)
function Game(num) {
    console.log("GameZone")
    return num;
}


// holder(5) // it gives error because its not access before its decleration where Game() can be accessable
const holder = (num) => {
    console.log("hello from holder")
    return num;
}