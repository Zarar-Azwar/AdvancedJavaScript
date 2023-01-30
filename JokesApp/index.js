const jokeText = document.querySelector("#joke")
const jokeButton = document.querySelector("#nextJoke")
    //url=https://icanhazdadjoke.com

// From line 7 to line 21 Promises

// const getJoke = () => {
//     const setHeaders = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch("https://icanhazdadjoke.com", setHeaders)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeText.innerHTML = data.joke
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }


//  ASYNC AWAIT
const getJoke = async() => {
    try {
        const setHeaders = {
            headers: {
                accept: 'application/json'
            }
        }
        const res = await fetch("https://icanhazdadjoke.com", setHeaders);
        const data = await res.json();
        jokeText.innerHTML = data.joke;
    } catch (error) {
        console.log(error)
    }
}
jokeButton.addEventListener("click", getJoke)