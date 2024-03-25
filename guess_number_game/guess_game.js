const min = document.getElementById("min");
const max = document.getElementById("max");
const guessBtn = document.getElementById("guessBtn");
const inputGuess = document.getElementById("inputGuess");
const resultSpan = document.getElementById("result");

let minimum = Math.round(Math.random() * 100);;
let maximum = Math.round(Math.random() * (200 - minimum)) + minimum;;
min.textContent = minimum;
max.textContent =  maximum;

let result = Math.round(Math.random() * (maximum - minimum)) + minimum;;

let guess = false;
console.log(result);

guessBtn.onclick = () => {
    let intent = Number(inputGuess.value);
    if(intent < result) {
        resultSpan.textContent = "Its bigger than that!"
    }
    if(intent > result) {
        resultSpan.textContent = "Its less than that!"
    }
    if(intent === result) {
        resultSpan.textContent = "Oh! you did it!"
    }
}