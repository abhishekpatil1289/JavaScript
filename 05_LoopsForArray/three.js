const silver = new Map();

silver.set("name", "bitwise");
silver.set("Project", "4cr Per Day");
silver.set("Window", "Glass");
silver.set("name", "bitwise"); // duplicata value never get in Map() , Map object is know for Unique values

// console.log(silver);

// console.log(silver.values())
// console.log(silver)

for (const [a, b] of silver) {
    // console.log(a, " :- ", b)
}


const myOjb = {
    "bike": "TVS",
    "Model": "200cs",
    "number": "1289",
    "age": 2
}

// for (const element of myOjb) { // Objects are not iterable using ForOf Loop Keep In Mind ( To Iterate a Object then use ForIN Loop)
//     console.log(element)
// }