'use strict'
const api = require('./api')
const ui = require('./ui')

let gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// const winPoss = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let player = 'X'
let num = 0
let gameOver = false

const changeLetter = function (event) {
  if ($(event.target).text() === '') {
    api.updateGame(event.target.id, player, gameOver)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
    if (player === 'X') {
      player = 'O'
      $(event.target).text('X')
      gameBoard[event.target.id] = 'X'
    } else if (player === 'O') {
      player = 'X'
      $(event.target).text('O')
      gameBoard[event.target.id] = 'O'
    }
  } else {
    checkSquare(event)
  }

  changeTurn()
  winGame()
  checkDraw()
}

const winGame = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    // make the square unclickable if it is pressed once
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    gameOver = true
    $('#new-message').text('Player X is the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    gameOver = true
    $('#new-message').text('Player O is the winner!')
    $('.square').css('pointer-events', 'none')
  }
}

const checkSquare = function (event) {
  if ($(event.target === 'true')) {
    $('#new-message').text('Invalid Move')
  }
}

const changeTurn = function () {
  if (player === 'X') {
    $('#new-message').text('It is X turn!')
  } else if (player === 'O') {
    $('#new-message').text('It is O turn!')
  }
}

const checkDraw = function () {
  num++
  if (num === 9 && gameOver === false) {
    $('#new-message').text('It is a tie!')

    $('.square').css('pointer-events', 'none')
  } else if (num === 9 && gameOver === true) {
    $('#new-message').text(' Player X wins!')
    setTimeout(function () { $('#new-message').text('') }, 1000)
    $('.square').css('pointer-events', 'none')
  }
}

const onNewGame = function (event) {
  event.preventDefault()
  $('.square').css('pointer-events', 'auto')
  // set player back to X
  player = 'X'
  // set gameboard array to original
  gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
  gameOver = false
  num = 0
  // reset the html board
  $('.square').text('')
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onGetGames = function (event) {
  event.preventDefault()

  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  changeLetter,
  checkSquare,
  onNewGame,
  onGetGames }
