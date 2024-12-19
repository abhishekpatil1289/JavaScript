const myNum = [1, 2, 3, 4, 5, 6, 7, 8];

// const temp = myNum.filter((num) => (num[2]))
const temp = myNum.filter((num) => { return num > 4 })

console.log(temp)

const newNum = [];

myNum.forEach((num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

console.log(newNum)