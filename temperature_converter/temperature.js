const cenCant = document.getElementById("cenCant");
const farCant = document.getElementById("farCant");

const cenText = document.getElementById("cenText");
const farText = document.getElementById("farText");

const btnCen = document.querySelector(".btn2");
const btnFar = document.querySelector(".btn1");

btnCen.onclick = () => {
    let result = "";
    if (cenCant.value !== "") {
        let far = Math.floor((Number(cenCant.value) * 1.8) + 32);
        result = far + "F";
    } else {
        alert("Ingresa un valor en la caja de texto.");
    }
    farText.textContent = result;
    cenText.textContent = cenCant.value + "°";
}
btnFar.onclick = () => {
    let result = "";
    if (farCant.value !== "") {
        let cen = Math.floor((Number(farCant.value)-32) * (5/9));
        result = cen + "°";
    } else {
        alert("Ingresa un valor en la caja de texto.");
    }
    cenText.textContent = result;
    farText.textContent = farCant.value + "F";
}