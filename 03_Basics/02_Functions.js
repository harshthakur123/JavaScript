function calculateCartPrice1(val1,val2,...num1){
    return num1;
}

console.log(calculateCartPrice1(100,200,300,400));//100,200 will go to val1 and
//val2 and rest will go to num1

function calculateCartPrice2(...num1){
    return num1;
}

console.log(calculateCartPrice2(200,300,600));

const user={
    username:"Harsh",
    price:200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({username : "HK",
price: 300})

const arr1=[1,2,3,4,6]

function returnArray(getArray){
    return getArray;
}

console.log(returnArray(arr1));