
const rnumber = document.getElementById("rnumber");
const randomBtn = document.getElementById("randomBtn");
const minimumInput = document.getElementById("minimum");
const maximumInput = document.getElementById("maximum");

randomBtn.onclick = (e) => {
    let max = maximumInput.value !== "" ? 
        Number(maximumInput.value) +1 :
        0;
    let min = minimumInput.value !== "" ?
           Number(minimumInput.value)
        : 1000;

    let randomNum = Math.floor(Math.random() * (max - min)) + min;
    rnumber.textContent = randomNum;
}