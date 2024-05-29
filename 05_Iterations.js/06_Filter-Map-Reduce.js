// const lang=['c','cpp','java','js','python']

// const value=lang.forEach( (item)=>{
//     return item
// })

// console.log(value);

const num=[1,2,3,4,5,6,7,8,9,10]

// const values=num.filter( (num)=> num % 2==0 )
// console.log(values);

// const value=num.filter( (item)=>{
//     return item % 2 == 0
    
// })

// console.log(value);

// const value=[]
// num.forEach( (item)=>{
//     if(item % 2==0){
//         value.push(item)
//     }
// })

// console.log(value);

const books = [
    { 
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        genre: "Fiction",
        year: 1960
    },
    { 
        title: "1984",
        author: "George Orwell",
        genre: "Dystopian",
        year: 1949
    },
    { 
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        year: 1925
    },
    { 
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        year: 1813
    },
    { 
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        genre: "Fantasy",
        year: 1997
    }
];


// const userBooks=books.filter( (bk)=> bk.year>1925)

// const userBooks=books.filter( (bk)=> {return bk.genre==="Romance"}) 
// we have to use 'return' keyword when we decalre block


// const userBooks=books.filter( (bk)=> {
//     return  bk.year>1925 && bk.genre==="Fiction"
// })
// console.log(userBooks);
