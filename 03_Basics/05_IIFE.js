// Immedietly Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})(); // ';' is important 

((name)=>{
    console.log(`DB TWO CONNECTED ${name}`);
})("HK ");  