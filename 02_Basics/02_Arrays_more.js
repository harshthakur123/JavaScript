const avengers=["Ironman","Thor","Hulk"]
const dc=["Superman","Batman","Flash"]
console.log(typeof dc);

// avengers.push(dc);
// console.log(avengers);
// console.log(avengers[3][0]);

const dc_marvel=avengers.concat(dc) //concat merge two arrays and give new array
console.log(dc_marvel); 

const all_new_heroes=[...avengers,...dc]
console.log(all_new_heroes);

const concat_Array=[1,2,[1,5,76],[34,2,4,[2,5,6]]]
console.log(concat_Array.flat(Infinity));

console.log(Array.isArray("HARSH"));
console.log(Array.from("HARSH"));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));