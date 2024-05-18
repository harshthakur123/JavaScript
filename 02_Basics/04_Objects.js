const tinderUser1=new Object();
const tinderUser2={}; ///Singleton

console.log(tinderUser1);
console.log(tinderUser2);

tinderUser2.id="123abc"
tinderUser2.name="Tommy"
tinderUser2.isLoggedIn=false

console.log(tinderUser2);

const regularUser={
    email:"hk@gmail.com",
    fullname:{
        userFullName:{
            firstName:"Harsh",
            lastName:"Thakur"
        }
    }
}

// console.log(regularUser.fullname.userFullName);

const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e",6:"f"}
const obj3={7:"d",8:"e",9:"f"}

// const obj3={obj1,obj2}
// const obj4=Object.assign(obj1,obj2)//here obj1 is act as a target and all 
//the values of obj2 is merged to obj1

// console.log(obj1);
// console.log(obj4);

// const obj5=Object.assign({},obj1,obj2,obj3) //here all values are merged
// //and assigned to new object {} i.e. obj5 previously all values are merged
// //are assigned to obj1 when {} is not given
// console.log(obj1);
// console.log(obj5);


const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

//Array of objects

const users = [
    {
        id: 1,
        email: "hk@gmail.com"
    },
    {
        id: 2,
        email: "pk@gmail.com"
    },
    {
        id: 3,
        email: "gk@gmail.com"
    }
];

console.log(users[1].email);
console.log(tinderUser2);
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));
console.log(tinderUser2.hasOwnProperty("isLoggedIn"));///to check wheather
//this property exists in object or not