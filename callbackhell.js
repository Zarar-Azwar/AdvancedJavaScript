setTimeout(() => {
    console.log("Timer 1");
    setTimeout(() => {
        console.log("Timer 2")
        setTimeout(() => {
            console.log("Timer 3")
            setTimeout(() => {
                console.log("Timer 4")
                setTimeout(() => {
                    console.log("Timer 5")
                    setTimeout(() => {
                        console.log("Timer 6")
                    }, 2000)
                }, 2000)
            }, 2000)
        }, 2000)
    }, 2000)

}, 2000);