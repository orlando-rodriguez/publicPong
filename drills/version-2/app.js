document.querySelector("canvas").addEventListener("gameOver", onGameEnd)
getTopScores()

function getTopScores() {
  const apiUrl = `https://galvanize-leader-board.herokuapp.com/api/v1/leader-board/GBP`
  fetch(apiUrl).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  }).then(scores => {
    renderTopScores(scores)
    return scores
  }).catch(err => alert(err))
}

function renderTopScores(scores) {
  var scoresHtml = scores.sort((a, b) => {
    return a.score < b.score
  }).slice(0, 3).map(game => {
    return `
    <p class="score-card">
      <span class="player-name">${game.player_name}</span>
      <span class="score">${game.score}</span>
    </p>
    `
  })

  scoresHtml.unshift(`<h1 class="scores-title">Top Scores</h1>`)

  document.querySelector('.scores').innerHTML = scoresHtml.join('')
}

function onGameEnd() {
  alert(`Final Score: ${score}`)

  fetch(`https://galvanize-leader-board.herokuapp.com/api/v1/leader-board`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        game_name: 'GBP',
        player_name: document.querySelector('.big-input').value,
        score
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return response.json()
    }).then(res => {
      getTopScores()
    }).catch(err => alert(err))
}
