let count = 0;

const countDisplay = document.getElementById("count");

document.getElementById("increment").addEventListener("click", function() {
    count++;
    countDisplay.textContent = count;
});

document.getElementById("decrement").addEventListener("click", function() {
    count--;
    countDisplay.textContent = count;
});

document.getElementById("reset").addEventListener("click", function() {
    count = 0;
    countDisplay.textContent = count;
});