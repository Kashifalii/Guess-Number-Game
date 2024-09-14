let input = document.getElementById("input");
let submit = document.getElementById("submit");
let guess = document.getElementById("guessNum");
let result = document.getElementById("result");
let counter = document.getElementById("counter");

submit.addEventListener("click", () => {
    if (input.value == guess.innerText) {
        result.innerText = "You Guessed Correct Number.";
        result.style.color = "green";
    } else {
        result.innerText = "You Guessed Wrong Number. Please Try Again.";
    }
    input.value = " ";
    counter.innerText++;
    if (counter.innerText == "4") {
        counter.innerText -= 4;
        result.innerText = "You failed. The Number is " + guess.innerText;
        result.style.color = "red";
    }
});