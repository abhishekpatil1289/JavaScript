function collabs(num, num2) {
    // console.log(num + num2)
}

const hold = collabs(5, 8);

// console.log(hold) // it gives undefine because of the function is now returning anything 


function Message(name) {
    return `welcome ${name}`
}

// Message("Don")  // this dosent print anythis because we just give the instruction for Return not for Print

// console.log(Message())


function temp(username = "lion") {
    if (!username) {
        console.log("please enter name");
        return
    }
    return `hello ${username} welcome`;
}


// console.log(temp())


function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(100,200,300)); 


const user = {
    name: "hp monitor",
    age: 3
}

function handleOject(anyobject) {
    console.log(`this is ${anyobject.name} `)
}

console.log(handleOject({
    name: "hp monitor",
    age: 3
}))