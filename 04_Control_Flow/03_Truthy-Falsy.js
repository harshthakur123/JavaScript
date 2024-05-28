//Truthy
// Whenever a value is considered as true by default is called truthy values
// Eg: "0",'false'," ",[],{},funtion(){} 


//Falsy
// Whenever a value is considered as false by default is called falsy values
// Eg : false,0,-0,BigInt 0n,"",null,undefined,NaN 

// const userEmail="hk@gmail.com"

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// const array=[]

// if(array.length===0){
//     console.log("Empty array");
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){ //Obj.keys(arr) returns array
//     console.log("Empty Obj");
// }


// Nullish Coalescing Operator (??) : null/ defined

let val1;
//val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 10

val1=null ?? 10 ?? 20

console.log(val1);


//Ternary Operator

// condition ? true : false

const iceTeaPrice=100

iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");



