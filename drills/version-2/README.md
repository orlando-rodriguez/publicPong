## Galvanize Breakout Pong

We've built a game from the tutorial [2D Breakout Game in Pure JavaScript](https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript) using some Galvanize flavoring.

![Pong Screenshot](./galvanize-breakout-pong-screenshot.png)

Use the [Leaderboard API](https://galvanize-leader-board.herokuapp.com/) to read and add scores to this game.

The Leaderboard API responds to `GET` requests with data that looks like this:

```js
```

The Leaderboard API accepts `POST` requests that look like this:

```js
```

* Track all scores under game name `GBP` // Put that in the POST request example
* On page load, get the latest scores from the API and add them to the page. For the top three scores (in descending order):
    * Make a `p` tag with the class of `score-card`
    * Inside of that tag, make a `span` with the class of `player-name` with the player's name in it
    * Next to that tag, add a `span` with the class of `score` with the player's score in it
* When the `canvas` element fires a `gameOver` event:
    * Post the player's score (accessible via the global `score` variable) to the Leaderboard API
    * Get the latest scores again
    * Rewrite the list of top scores
