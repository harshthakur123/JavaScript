//Ways of declaring objects
//1.Constructor  2.Literals  3.Singleton

//1.Object Literals

const sym=Symbol("key1")

const user1={
    name: "Harsh",
    "full name":"Harsh Thakur",
    [sym]:"myKey1",
    age:22,
    location:"Pune",
    email:"hk@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Friday"]
}

console.log(user1.name);
console.log(user1["full name"]); //This method is used for space separated
// key name enclosed inside double quotes- SQUARE NOTATION
console.log(user1[sym]);

user1.email="hk@yahoo.com"
console.log(user1["email"],"  ",user1.email);
// Object.freeze(user1)
user1.email="hk@insta.com"
console.log(user1["email"]);
console.log(user1);


user1.display=function(){
    console.log("Hello HK");
}

user1.display2=function(){
    console.log(`Hello ,${this.name}`);
}

console.log(user1.display());
console.log(user1.display2());



