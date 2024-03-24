const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increase");
const countLabel = document.getElementById("countLabel");

let counter = 0;
decreaseBtn.addEventListener('click', (e) => {
    counter--;
    countLabel.textContent = counter;
});

increaseBtn.addEventListener('click', (e) => {
    counter++;
    countLabel.textContent = counter;
});

resetBtn.addEventListener('click', (e) => {
    counter = 0;
    countLabel.textContent = counter;
});