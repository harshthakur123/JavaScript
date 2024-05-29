// Const is used to perform operations on array

const num=[1,2,3,4,5,6]

// const value=num.map( (num)=>{
//    return num+10
// })

// console.log(value);

const value=num
                .map( (item)=> item*10 )
                .map( (item)=>item + 1 )
                .filter( (item)=> item>=40 )    

console.log(value);