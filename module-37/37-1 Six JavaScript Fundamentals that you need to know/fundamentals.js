// ::: 1 :::
// ::: How to declare a variable using let and const :::
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';


// ::: 2 :::
// ::: Six Basics conditions: <, >, ===, !==, <=, >=  ::::
// ::: Multiple conditions: &&, ||  ::::
if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}


// ::: 3 :::
// ::: array declare, index, length, push  ::::
const numbers = [89, 35, 98, 12];
numbers[0] = 56;


// ::: 4 :::
// ::: for loop ::::
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}


// ::: 5 :::
// ::: function ::::
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(35, 78);


// ::: 6 :::
// ::: object ::::
// ::: Three ways to access object value  ::::
const actor = {
    name: 'shakib khan',
    age: 32,
    movies: ['king khan', 'dhakar mastan']
}


console.log(actor.age);  // first way : direct by property
console.log(actor['age']) // second way : access via property name string

const myvariable = 'age';
console.log(student[myvariable]); // third way : access via property name in variable