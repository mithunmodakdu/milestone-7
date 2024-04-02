const add = (first, second) =>{
    return first + second;
}

const multiply = (first, second) =>{
    return first * second;
}

const divideTheFirstNumberByTheSecondNumber =(first, second) =>{
    return first / second;
}

//:::: any one can be exported ::::
// export default add;
// export default multiply;

//:::: to export more than one, object can be used::::
// const calculator = {add: add, multiply:multiply};
// export default calculator;


export {add, multiply, divideTheFirstNumberByTheSecondNumber};