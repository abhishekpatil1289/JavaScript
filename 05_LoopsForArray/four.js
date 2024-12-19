/*
ForIn Loop , All Belows Loops are ForIn
*/


const myOjb = {
    "bike": "TVS",
    "Model": "200cs",
    "number": "1289",
    "age": 2
}


// for (const key in myOjb) {
//     console.log(key)
// }


for (const key in myOjb) {
    // console.log(`${key} :- ${myOjb[key]}`)
}

const Arr = ["a", "b", "c", "d", "e", { name: "C++", age: 5 }];

for (const key of Arr) {
    console.log(key);
}