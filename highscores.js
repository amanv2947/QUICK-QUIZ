const highScoresList = document.getElementById("highScoresList");
const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscores);

highScoresList.innerHTML = highscores
.map( score => {
    return `<li class = "high-scores">${score.name} - ${score.score}</li>`;
})
.join("");