const cars = ["Saab", "Volvo", "BMW", "hello", "Hero", {
    "programming": "C++",
    "language": "Java"
}];

cars.forEach((val) => {
    // console.log(val)
})


cars.forEach((value, index) => {
    // console.log(value, index)
})


const myOjb = [
    {
        language: "javascript",
        file: "first"
    },
    {
        language: "typescript",
        file: "second"
    },
    {
        language: "java",
        file: "third"
    },
    {
        language: "c++",
        file: "fourth"
    }
]

myOjb.forEach((item) => {
console.log(item.file)
})
