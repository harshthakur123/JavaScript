//if

// const isUserLoggedIn=true

// if(isUserLoggedIn){
//     console.log("Condition is true");
// }else{
//     console.log("COndition is false");
// }

/*
<  -- less than
> -- greater than
<= -- less than or equal to
>= -- greater than or equal to
!= -- not than or equal to
==  -- is equal to
===  -- Strict check(check data type also)
*/

// if(2==="2"){
//     console.log("True");
// }

//----------------------------if-else--------------------------

// const temp=40

// if(temp<50){
//     console.log("Temp less than 50");
// }else{
//     console.log("Temp is greater than 50 ");
// }


// const score=200

// if(score>100){
//     let power="fly" 
//     console.log(`User power : ${power}`);
// }
// console.log(`User power ${power}`);

const balance = 1000
//  if(balance<9000) console.log("Test"),console.log("Test 2"); // Dont write such codes
//  //Unreadable 

//----------------------------if-else-else if--------------------------

// if(balance<500){
//     console.log("Balance is less than 500");
// }else if(balance<750){
//     console.log("Balance is less than 750");
// }else{
//     console.log("Balance is greater than 1000");
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 2==4){
    console.log("Allow to buy course");
}

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in");
}