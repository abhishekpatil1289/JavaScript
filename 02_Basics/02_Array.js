const marvel_Heros = ["IronMan", "spiderman", "thor"];

const dc = ["superman", "batman", "flash"];


//marvel_Heros.push(dc);
//console.log(marvel_Heros);

 const newArray =marvel_Heros.concat(dc);
//  console.log(newArray);

// const ab=[];

// ab.push(...dc);
// console.log(ab);


const duplicate = [1, 2, 3, [9, 7, [5, 7], [8, 5, 3]], [5, 6, 7]];

// console.log(duplicate.flat(Infinity)); // infinity is used for check the depth of array 

// console.log(Array.from("abhishek"));

let arrat = [1,2,3];

let holder  = arrat.join();
// console.log(holder);


let str = "abhishek";  


// const hold = str.split("").reverse().join("");
// split method make the array of string , reverse method reverse the array , and join method remove the array and convert all the arary element into the string
// console.log(hold)
// const hold = Array.from("sky is the limit");

// console.log(hold);


let score1 = 200;
let score2 = 300;
let score3 = 400;

console.log(Array.of(score1, score2, score3))