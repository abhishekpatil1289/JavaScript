const regularUser = {
    email: "temp@gmail.com",
    fullname: {
        name: {
            name: "team Opine",
            first: "3M tech"
        }
    }
}

// const arr = [1, 2, 34, 5];

// console.log(regularUser.flat());

// const m1 = { 1: "A", 2: "B" };
// const m2 = { 3: "C", 4: "D" };

// const m3 = Object.assign(m1, m2)
// console.log(m3)

// console.log(m1 === m3)



const User = [
    {
        user: "abhi",
        email: "abc@gmail.com"
    },
    {
        user: "ramu",
        email: "ramu@gmail.com"
    },
    {
        user: "shamu",
        email: "shamu@gmail.com"
    },
    {
        user: "baburav",
        email: "baburav@gmail.com"
    }
]


const tinder = {};

tinder.id = 1;
tinder.name = "monitor"
tinder.model = "pc007"
tinder.monitor = "0023BD"

// console.log(User[3].email)
// console.log(tinder);

// console.log(Object.values(tinder));
// console.log(Object.keys(tinder));
// console.log(Object.entries(tinder));
// console.log(tinder.hasOwnProperty('id'));

const { monitor : tempname } = tinder; // DiStructuring of tinder Object 

console.log(tempname)
