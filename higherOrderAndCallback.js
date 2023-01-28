// Higher Order and Call back Function
//Callback function based Calculator

const add = (num1, num2) => {
    return num1 + num2
}

const sub = (num1, num2) => {
    return num1 - num2
}

const div = (num1, num2) => {
    return num1 / num2;
}

const mul = (num1, num2) => {
    return num1 * num2;
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2)
}

// Callback functions are add sub mul div
// HigherOrder Function is calculator
// Callback function is the function in which callback function is called
console.log(calculator(5, 2, add))
console.log(calculator(5, 3, div))
console.log(calculator(5, 5, mul))
console.log(calculator(5, 4, sub))