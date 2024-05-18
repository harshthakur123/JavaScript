
function display(){
    console.log("Happy");
    console.log("Birthday");
    console.log("HK");
}

display() //function reference 

const add=function(n1,n2){ //  n1,n2 -> Params
    console.log(`Inside = ${n1+n2}`);
    return n1+n2;
    console.log("HEllo"); //unreachable code  
}

console.log(add(10,20)); //  10,20 -> Arguments

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username!!!");
        return
    }
    return `${username} logged in.`
}

console.log(loginUserMessage());