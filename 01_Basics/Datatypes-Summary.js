//Primitive Datatypes

/*
String,Number,Boolean,Null,Undefined,Symbol(To define unique value)
*/

const id1=Symbol('123')
const id2=Symbol('123')
console.log(id1===id2);


//Reference Datatypes
/*
Array,Object,Function
*/

const num=["one","two","three"]

let myObj={
    name:"HK",
    age:"22"
}

const myFunction=function(){
    console.log("Hello World");
}
myFunction();

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof num);