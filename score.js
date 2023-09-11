document.addEventListener("DOMContentLoaded", function() {
    var scoreContainer = document.querySelector("#quizContent");
    var scoresContainer = document.querySelector("#displayScores");
    var backButton = document.querySelector("#back");
    var clearButton = document.querySelector("#clear");

    backButton.addEventListener("click", function() {
        window.location.replace("index.html");
    });

    clearButton.addEventListener("click", function() {
        localStorage.clear();
        clearScoresFromDisplay();
    });

    var storedScores = JSON.parse(localStorage.getItem("storeScores")) || [];

    if (storedScores.length > 0) {
        displayScores(storedScores);
    }

    function displayScores(scores) {
        scoresContainer.innerHTML = "";

        for (var i = 0; i < scores.length; i++) {
            var scoreItem = document.createElement("li");
            scoreItem.textContent = scores[i].initials + " " + scores[i].score;
            scoresContainer.appendChild(scoreItem);
        }
    }

    function clearScoresFromDisplay() {
        scoresContainer.innerHTML = "";
    }
});