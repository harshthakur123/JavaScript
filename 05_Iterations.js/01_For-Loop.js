// for

// let line=""
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     line+=element+" ";
    
// }

// console.log(line);

// for (let i = 0; i < 10; i++) {
//     const element = i
    
//     if(element==5){
//         console.log("5 is bset");
//     }

//     console.log(element);
    
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`Outer loop values ${i}`);
    
//     for (let j = 0; j < 5; j++) {
//         console.log(`Inner Loop vales ${j} and outer loop ${i}`);
//     }

// }

// for (let i = 1; i <= 5; i++) {
//     console.log(`Table of ${i}`);
    
//     for (let j = 1; j <=5 ; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }

// }

// let array = ["flash","batman","hulk"]
// console.log(array.length);

// for (let i = 0; i < array.length; i++) {
    
//     console.log(array[i]);
// }


// Break and Continue

// for (let i = 1; i <= 10; i++) {

//     if(i==5){
//         console.log(`5 detected`);
//         break;
//     }

//     console.log(`Value of i is ${i}`);
    
// }

// console.log("Out of loop");

for (let i = 1; i <= 10; i++) {

    if(i==5){
        console.log(`5 detected, skipped `);
        continue;
    }

    console.log(`Value of i is ${i}`);
    
}

console.log("Out of loop");
