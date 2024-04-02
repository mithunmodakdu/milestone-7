

const numbers = [89, 35, 98, 12];

const actor = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}


// ::: template string  :::: 
const about = `My name is ${actor.name} age of ${actor.age} has number ${numbers[2]} also liked movie ${actor.movies[0]}`;
console.log(about)


// ::: arrow function  :::: 

// without parameter
const getFiftyFive = () => 55;

// single parameter  single line
const addSixtyFive = num => num + 65;

const isEven = x => x % 2 == 0;

// multiple parameters  single line
const addThree = (x, y, z) => x + y + z;

//  multiple line
const doMath = (num1, num2) =>{
    const sum = num1 + num2;
    return sum;
}



// ::: arrow function  :::: 

const nNumbers = [numbers];
const neNumbers = [...numbers];
const newNumbers = [...numbers, 25, 30, 35];
console.log(nNumbers);
console.log(neNumbers);
console.log(newNumbers);
