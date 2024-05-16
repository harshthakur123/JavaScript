//Primitive Datatypes

/*
String,Number,Boolean,Null,Undefined,Symbol(To define unique value)
*/

// const id1=Symbol('123')
// const id2=Symbol('123')
// console.log(id1===id2);


// //Reference Datatypes
// /*
// Array,Object,Function
// */

// const num=["one","two","three"]

// let myObj={
//     name:"HK",
//     age:"22"
// }

// const myFunction=function(){
//     console.log("Hello World");
// }
// myFunction();

// console.log(typeof myFunction);
// console.log(typeof myObj);
// console.log(typeof num);

//---------------------------------------------------------------

//Stack (Primitive), Heap(Non-Primitive)

let name1="HK"
let name2=name1
name2="PK"
console.log(name1,name2);

let myObj1={
    name:"HK",
    email:"hk@gmail.com"
}

let myObj2=myObj1
myObj2.email="hk@google.com"
console.log(myObj1.email,myObj2.email);