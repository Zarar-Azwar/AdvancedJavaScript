// Using normal functions

function sum(num1) {
    return function(num2) {
        return function(num3) {
            console.log(num1 + num2 + num3)
        }
    }
}

//sum(5)(6)(8)

//using arrow function

const sumArrow = (num1) => (num2) => (num3) => console.log(num1 + num2 + num3)

sumArrow(6)(4)(7)