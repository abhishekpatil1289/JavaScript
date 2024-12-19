const arr = [1, 2, 3, 4, 5, 6];

for (const element of arr) {
    if (element == 3) continue;
    // console.log(`${element}`)
}

let str = "Technology";

for (const count of str) {
    // console.log(count)
}

str = "Hello world!"

for (const element of str) {
    if (element == ' ') break;
    console.log(element)
}