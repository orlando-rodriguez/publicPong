const scoresSection = document.querySelector('.scores');
const SCORE_URL = 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board';
const GAME_SCORES_URL = 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/GBP';

canvas.addEventListener('gameOver', gameOver);

getHighScores();

function getHighScores() {
  fetch(GAME_SCORES_URL)
    .then(handleResponse)
    .then(sortScores)
    .then(appendScores)
    .catch(error => {
      console.error(error);
    });
}

function sortScores(scores) {
  scores.sort((score1, score2) => score2.score - score1.score);
  return [scores[0], scores[1], scores[2]];
}

function appendScores(topScores) {
  scoresSection.innerHTML = '';
  topScores.forEach(score => {
    const scoreP = document.createElement('p');
    scoreP.className = 'score-card';

    const playerSpan = document.createElement('span');
    playerSpan.className = 'player-name';
    playerSpan.textContent = score.player_name;
    scoreP.appendChild(playerSpan);

    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'score';
    scoreSpan.textContent = score.score;
    scoreP.appendChild(scoreSpan);

    scoresSection.appendChild(scoreP);
  });
}

function gameOver() {
  alert(`GAME OVER! Your score is: ${score}`);
  const data = {
    game_name: 'GBP',
    player_name: document.querySelector('input').value,
    score
  };
  postScore(data)
    .then(getHighScores);
}

function postScore(data) {
  return fetch(SCORE_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(handleResponse).catch(error => {
    console.error(error);
  });
}

function handleResponse(response) {
  if(response.ok) {
    return response.json();
  } else {
    return response.json().then(error => {
      throw error;
    });
  }
}
