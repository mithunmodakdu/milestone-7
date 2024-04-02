// :::::::::::::: array destructuring :::::::::::::::
const numbers = [45, 65];

// const x = numbers[0];
// const y = numbers[1];
// console.log(x, y);

//:: destructuring array directly::
// const [x, y] = [45, 65];
// console.log(x, y);


//:: destructuring with array variable name::
const [x, y] = numbers;
// console.log(x, y);


//:: destructuring with function that produce array::
function boxify(num1, num2){
    const nums = [num1, num2];
    return nums
}
// console.log(boxify(90, 34))
// const[first, second] = [90, 34];
const [first, second] = boxify(90, 34);
// console.log(first, second);



//:: destructuring with array within object::
const actor = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}
const [firstMovie, secondMovie] = actor.movies;
// console.log(firstMovie, secondMovie);




// :::::::::::: object destructuring ::::::::::::::::::::::

//:: destructuring object directly::
const { name, age} = {name: 'alu', age: 14};
// console.log(name, age);

// const { name, age} = {id: 12, name: 'alu', salary: 3400, age: 14};
// console.log(age, name);



//:: destructuring with object variable name::
const employees = {
    ide: 'VS code',
    designation: 'developer',
    machine: 'mac',
    language: ['html', 'css', 'js'],
    specification:{
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin',
        }
    }
}

const {machine, ide} = employees;
const {weight, address} = employees.specification;
const {brand} = employees?.specification?.watch;