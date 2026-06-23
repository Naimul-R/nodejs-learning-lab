const URL = "https://api.adviceslip.com/advice";
const advicePara = document.querySelector("#advice");
const btn = document.querySelector("#btn");

const getAdvice = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    advicePara.innerText = data.slip.advice;
}

btn.addEventListener("click", getAdvice);