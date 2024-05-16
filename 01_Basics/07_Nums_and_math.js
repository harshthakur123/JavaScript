// const score=500
// console.log(score);

// const balance=new Number(500)
// console.log(balance);
// console.log(balance.toString());
// console.log(`Length = ${balance.toString().length}`);

// const num=123.953465
// console.log(num.toFixed(2)); //precision value
// console.log(num.toPrecision(5));
// console.log(num.toPrecision(3));
// console.log(num.toPrecision(4));

// const hundred=1000000000
// console.log(hundred.toLocaleString('en-In'));
// console.log((hundred.toLocaleString())); 


//-----------------------MATHS-----------------------------

// console.log(Math);
// console.log(Math.abs(-45));
// console.log((Math.round(34.56)));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.pow(2,4));
// console.log(Math.min(3,54,6,2,43,-2));
// console.log(Math.max(43,23,326,4,2));

console.log(Math.random());
console.log(Math.random()*10); //random values betwenn 1-10
console.log((Math.random()*10)+1); //random value betwenn 1-10 excluding 0 (to avoid 0 when floored)

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min);