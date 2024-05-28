// const user={
//     username:"Harsh",
//     price:99,
//     welcomeMessage:function(){
//         console.log(`${this.username} ,welcome to website`);
//         console.log(this);
//     }
// }

//this -> refers to current context

// user.welcomeMessage()
// user.username="HK"
// user.welcomeMessage()

//  console.log(this);

// function chai(){
//     let username="HK"
//     console.log(this.username);
// }

// chai()

const chai = ()=>{
    let username="HK"
    console.log(this);
}
// chai()

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// } //Explicit return 

const addTwo=(num1,num2)=>(num1+num2); //implicit return

const obj=()=>({username:"HK"})

console.log(obj());
console.log(addTwo(10,20));