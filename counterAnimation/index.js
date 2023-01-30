const counters = document.querySelectorAll(".counter")
console.log(counters)
counters.forEach((counter) => {
    counter.innerHTML = 0;
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const currentVal = Number(counter.innerHTML)
        const inc = target / 100
        if (currentVal < target) {
            counter.innerHTML = `${currentVal+inc}`
        }
        setTimeout(updateCounter, 10)

    }
    updateCounter()
})