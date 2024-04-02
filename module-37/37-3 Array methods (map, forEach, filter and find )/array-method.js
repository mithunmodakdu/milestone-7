const products =[ 
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
    {name: 'watch', price: 3000, brand: 'casio', color: 'yellow'},
    {name: 'sunglass', price: 300, brand: 'ribon', color: 'black'},
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
   
] 


// ::: .map() :::
// map return in array
const brands = products.map(product => product.brand);
// console.log(brands);
const price = products.map(product => product.price);
// console.log(price);


// ::: .forEach() :::
// as forEach does not return anything, it does not require declaring variable to store the result

// products.forEach(product => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach(product => {


})


// ::: .filter() :::
// it returns in array based on condition 
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);


// ::: .find() :::
// it returns the first item that fullfil condition(not in array, item directly)
const special = products.find(product => product.name.includes('n'));
console.log(special);