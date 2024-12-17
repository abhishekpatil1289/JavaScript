const jsUser = {
    name: "Don",
    age: 12,
    location: "surat",
    email: "temp@gmail.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"],
}

// console.log(jsUser.email)
// console.log(jsUser["lastLogginDays"])

// Object.freeze(jsUser)

// jsUser.greeting = function Message()
// {
//     console.log("hello User");
// }

jsUser.greeting = function Myage() {
    return `my age is ${this.age}`
}

console.log(jsUser.greeting());

