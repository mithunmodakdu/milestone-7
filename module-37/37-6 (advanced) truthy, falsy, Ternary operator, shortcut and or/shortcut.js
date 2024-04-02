// ::::::::::::::::::::: truthy falsy :::::::::::::::::::
// truthy are those which are not falsy such as 'almas', 5, true, [] {}

// '', 0, false, null, undefined are falsy

// :::: check truthy ::::
let myVar = 5;
if(myVar){
    myVar = myVar * 100;
}
else{
    myVar = 0;
}


// :::: check negative or falsy anything ::::
let myMoney = 50;
if(!myMoney){

}


// ::::::::::::::::::::: ternary :::::::::::::::::::

// const money = 80;
// let food;
// if(money > 100){
//     food = 'biriyani';
// }
// else{
//     food = 'cha biscuit';
// }

// above condition can be written in shortcut which is called ternary
const money = 800;
const food = money > 100? 'biriyani' : 'cha biscuit';
// console.log(food);

let drink = (money > 100 && myVar > 100)? 'coke' : 'filter water';
// console.log(drink);



// ::::::::::::: string to number conversion in shortcut::::::::::
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr);


// ::::::::::::: number to string conversion in shortcut::::::::::
const input = '520';
// console.log(input);
const inputNum = +input;
// console.log(inputNum);


// ::::::::: calling function based on true false condition ::::::::

// const isActive = true;
const isActive = false;
const showUser = () => console.log('display user');
const hideUser = () => console.log('hide user');
// isActive? showUser() : hideUser();

// :::: use of &&  If left side is true then right side will be executed ::::
// isActive && showUser();

// :::: use of ||  If left side is false then right side will be executed ::::
isActive || hideUser();

// :::: toggle boolean ::::
isActive = !isActive;