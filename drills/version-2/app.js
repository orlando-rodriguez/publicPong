const scoresContainer = document.querySelector('.scores')
leaderboardURL = 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/GBP'
postScoresURL = 'https://galvanize-leader-board.herokuapp.com/api/v1/leader-board'
scoreboard()

function scoreboard() {
  fetch(leaderboardURL)
    .then((response) => response.json())
    .then(sort)
    .then(appendScores)
      .catch(error => {
          console.error(error)
        })
}



canvas.addEventListener('gameOver', gameOver)

function sort(scores) {
  scores.sort((score1, score2) => score2.score - score1.score)
  return [scores[0], scores[1], scores[2]]
}

function appendScores(scores) {
  scoresContainer.innerHTML = ''
  scores.forEach(score => {
    const scoreP = createNode('p')
    scoreP.className = 'score-card'

    const playerSpan = createNode('span')
    playerSpan.className = 'player-name'
    playerSpan.textContent = score.player_name
    append(scoreP, playerSpan)

    const scoreSpan = createNode('span')
    scoreSpan.className = 'score'
    scoreSpan.textContent = score.score
    append(scoreP, scoreSpan)
    append(scoresContainer, scoreP)
  })
}

function createNode(element) {
  return document.createElement(element)
}

function append(parent, element) {
  return parent.appendChild(element)
}

function gameOver() {
  alert(`GAME OVER! Your score is ${score}`)
  let endData = {
    game_name: 'GBP',
    player_name: document.querySelector('input').value,
    score
  }
  postScores(endData)
    .then(scoreboard)
}

function postScores(endData) {
  fetch(postScoresURL, {
    method: "POST",
      headers: new Headers({
        "content-type":
        "application/json"
      }),
      body: JSON.stringify(endData)
  })
}
