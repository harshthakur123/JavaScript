// const arr1=[2,4,23,6,34]
// console.log(arr1[0]);

// const arr2=arr1
// arr2[2]=344
// console.log(arr1[2]); // shallow copy - sharing same memory reference

// arr1.push(100)
// console.log(arr1)
// arr1.pop()
// console.log(arr1);

// arr1.unshift(45);
// console.log(arr1); // add element at 1st place
// arr1.shift()
// console.log(arr1); // removes elemnt at 1st place

// console.log(arr1.includes(23));
// console.log(arr1.indexOf(4));

// const arr3=[1,2,4,3,6,5]
// const joint=arr3.join(); // convert array to string
// console.log(typeof joint);


const arr1=[1,2,3,4,5]

const a1=arr1.slice(1,3)
console.log(a1);
console.log(arr1);
console.log("-----------------------------");

const a2=arr1.splice(1,3)
console.log(a2);
console.log(arr1);
console.log("-----------------------------");


console.log(arr1);
console.log(a1);
console.log(a2);
