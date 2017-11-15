# Galvanize Breakout Pong Rubric

## Functional

- [ ] Uses `getTopScores()` to make `GET` request with a `fetch()` call
- [ ] `GET` request is using the URL for the game name `GBP`
- [ ] Calls `renderTopScores()` with the latest scores from the API in a `.then()`
- [ ] Catches and alerts any errors from `GET` request
- [ ] Uses `onGameEnd()` to make `POST` request with `fetch()` API
- [ ] `POST` calls are using the `GBP` game name
- [ ] `POST` calls are sent using headers to accept JSON
- [ ] Updates the latest scores when `POST` data returns
- [ ] Catches and alerts any errors from `POST` request

## Style

- [ ] No `console.log()`s
- [ ] Consistent semi-colon usage
