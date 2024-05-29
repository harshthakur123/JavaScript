const num=[1,2,3,4]
// const values=num.reduce( function(acc,currVal){
//     console.log(`acc:${acc} and curval : ${currVal}`);
//     return acc+ currVal
// },0)

// const values=num.reduce( (acc,curVal)=> acc+curVal,0)

// console.log(values);

const shoppingCart = [
    {
        itemName: "T-shirt",
        price: 300,
        quantity: 2
    },
    {
        itemName: "Jeans",
        price: 500,
        quantity: 1
    },
    {
        itemName: "Sneakers",
        price: 1000,
        quantity: 1
    },
    {
        itemName: "Backpack",
        price: 2500,
        quantity: 1
    },
    {
        itemName: "Sunglasses",
        price: 200,
        quantity: 2
    }
];

const priceToPay=shoppingCart.reduce( (acc,item)=> acc+item.price*item.quantity,0)
console.log(priceToPay);