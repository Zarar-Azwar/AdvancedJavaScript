const therm = document.getElementById('thermomter')
const displayThermometer = () => {
    therm.innerHTML = "&#xf2cb"
    therm.style.color = "#6633dd"

    setTimeout(() => {
        therm.innerHTML = "&#xf2ca"
        therm.style.color = "green"
    }, 1000)
    setTimeout(() => {
        therm.innerHTML = "&#xf2c9"
        therm.style.color = "aqua"
    }, 2000)
    setTimeout(() => {
        therm.innerHTML = "&#xf2c8"
        therm.style.color = "blue"
    }, 3000)
    setTimeout(() => {
        therm.innerHTML = "&#xf2c7"
        therm.style.color = "red"
    }, 4000)
}



displayThermometer()
setInterval(displayThermometer, 5000)