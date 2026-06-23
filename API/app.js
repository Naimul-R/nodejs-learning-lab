const URL = "https://api.adviceslip.com/advice";
const advicePara = document.querySelector("#advice");
const btn = document.querySelector("#btn");

// This even much more easier to write and read
const getAdvice = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    advicePara.innerText = data.slip.advice;
}

// Using promise chain
// function getAdvice () {
//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         getAdvice.innerText = data.slip.advice;
//     });
// };

btn.addEventListener("click", getAdvice);