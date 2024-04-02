
// :::::::: JSON.stringify() :::::::::::::
const actor = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const actorJSON = JSON.stringify(actor);
// console.log(actor);
// console.log(actorJSON);


// :::::::: JSON.parse() :::::::::::::
const actorObject = JSON.parse(actorJSON);
// console.log(actorObject);



  
// :::::::: fetch :::::::::::::
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));



// :::::::: Object.keys(), Object.values()::::::
const keys = Object.keys(actor);
// console.log(keys);

const values = Object.values(actor);
// console.log(values);


// ::::::::   .forEach() :::::::::::::
const numbers = [23, 54, 67, 87, 23, 78]
numbers.forEach(num => console.log(num));

// ::::::::   for of :::::::::::::
// it is used in array like object

// ::::::::   for in :::::::::::::
// it is used in object


// ::::::::::::  add or remove from an array :::::::::::::
const products =[ 
    {name: 'laptop', price: 3200, brand: 'len', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'HTC', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ray', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
   
] 

const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// :::: copy products array and then add newProduct ::::
const newProducts = [...products, newProduct];
// console.log(newProducts);

// :::: create a new array without one specific item ::::
// e.g. create new array without phone
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining);

