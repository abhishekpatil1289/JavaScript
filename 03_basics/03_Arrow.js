const user = {
    name: "Redmi",
    age: 5,
    welcome: function () {
        console.log(`Device name is ${this.name}`);
        console.log(this)
    }
}

// user.welcome();
// console.log(this)

function chai() {
    console.log(this);
}

// chai();

const add = (num1, num2) => {
    return num1 + num2;
}

// console.log(add(10,11));

const addDouble = (num, num2) => num + num2;

// console.log(addDouble(10, 11));

const temp = () => { console.log("11") }

console.log(temp())


/*
    "this" keyword only used in Objects not in function
*/