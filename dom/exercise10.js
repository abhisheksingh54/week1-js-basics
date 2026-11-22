const message = document.getElementById("message");
const counter = document.getElementById("counter");

message.addEventListener("input", function() {
    let length = message.value.length;

    counter.textContent = "Characters: " + length;
});