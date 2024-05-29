//For-Each-loop

const lang=['c','cpp','java','js','python']

// lang.forEach( function (item){
//     console.log(item);
// })

// lang.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item){
//     console.log(item);
// }

// lang.forEach(printMe);

// lang.forEach( (item,index,arr)=>{
//     console.log(item,arr,index);
// })

const coding=[

    {
        languageName:"C",
        fileName:"C"
    },
    
    {
        languageName:"CPP",
        fileName:"C++"
    },
    
    {
        languageName:"Java",
        fileName:"java"
    }


]

coding.forEach( (item)=>{
    console.log(item.languageName,":-",item.fileName);
} )