
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highscores =JSON.parse(localStorage.getItem('highscores')) || [];
console.log(highscores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})
saveHighScore = e => {
    e.preventDefault();

    const score = {
        score : mostRecentScore,
        name : username.value
    };
    highscores.push(score);

    // sorted highscore array
    highscores.sort( (a,b) => b.score-a.score)

    highscores.splice(5);

    localStorage.setItem('highscores', JSON.stringify(highscores));
    window.location.assign("/");

    console.log(highscores);
}