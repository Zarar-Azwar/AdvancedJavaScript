const submitClick = document.getElementById("submitButton")

const converter = () => {
    const temprature = document.getElementById("temprature")
    const tempSelected = document.getElementById("tempType")

    const res = document.getElementById("result")
    const tempVal = temprature.value;
    console.log(tempVal)
    const typeTem = tempSelected.options[tempSelected.selectedIndex].text;

    var temp;
    if (typeTem === 'Farenheit') {
        temp = ((tempVal) - 32) * (5 / 9)
    } else {
        temp = (tempVal * (9 / 5)) + 32
    }
    // const tempratureType = tempSelected.options[tempSelected.selectedIndex].value;


    res.innerHTML = `${tempVal} degree ${typeTem} is ${Math.round(temp)}`
}

submitClick.addEventListener('click', converter)