function openGame(module) {
    document.getElementById("game-popup").style.display = "flex";
    alert("Welcome to Module " + module + " Game!");
}

function closePopup() {
    document.getElementById("game-popup").style.display = "none";
}

function submitAnswer() {
    let answer = document.getElementById("answer").value;
    if (answer.trim() === "") {
        alert("Please enter an answer!");
    } else {
        alert("Answer submitted! Well done!");
        closePopup();
    }
}
