const function1 = () => {
    setTimeout(() => {
        console.log("Function 1 is executed")
    }, 3000);
}

const function2 = () => {
    setTimeout(() => {
        console.log("Function2 is executed")
    }, 1000)
}

const function3 = () => {
    console.log("Function3 is starting")
    function1()
    function2()
    console.log("Function3 is ending")
}

function3()

// Output:
// Function3 is starting
// Function3 is ending
// Function2 is executed
// Function 1 is executed