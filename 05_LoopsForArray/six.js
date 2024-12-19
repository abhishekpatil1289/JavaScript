const myNum = [1, 2, 3, 4, 5, 6, 7, 8];

// const temp = myNum.filter((num) => (num[2]))
const temp = myNum.filter((num) => { return num > 4 })

// console.log(temp)

const newNum = [];

myNum.forEach((num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

// console.log(newNum)



const data = [
    { id: 1, name: "Alice", age: 28, city: "New York" },
    { id: 2, name: "Bob", age: 35, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 22, city: "Chicago" },
    { id: 4, name: "David", age: 30, city: "San Francisco" },
    { id: 5, name: "Eve", age: 25, city: "Boston" },
    { id: 6, name: "Frank", age: 40, city: "Seattle" },
    { id: 7, name: "Grace", age: 27, city: "Austin" },
    { id: 8, name: "Hannah", age: 33, city: "Denver" },
    { id: 9, name: "Irene", age: 29, city: "Miami" },
    { id: 10, name: "John", age: 45, city: "Dallas" },
    { id: 11, name: "Kim", age: 26, city: "Phoenix" },
    { id: 12, name: "Liam", age: 38, city: "Orlando" }
];

const iN2 = data.filter((num) => (num < 4))