'use strict'

const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]

//possibilities to win the game

// const winPoss = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let player = 'X'

// change the player

const changeLetter = function (event) {
  console.log(event.target)
  if ($(event.target).text() === '') {
    if (player === 'X') {
      player = 'O'
      $(event.target).text('X')
      gameBoard[event.target.id] = 'X'
      console.log(gameBoard)
    } else if (player === 'O') {
      player = 'X'
      $(event.target).text('O')
      gameBoard[event.target.id] = 'O'
      console.log(gameBoard)
    }
  } else {
    checkSquare(event)
  }
  changeTurn()
  winGame()
}

const winGame = function () {
  if (gameBoard[0] === 'X' && gameBoard[1] === 'X' && gameBoard[2] === 'X') {
    console.log('You are the winner!')
    $('#new-message').text('You are the winner!')

    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'O' && gameBoard[1] === 'O' && gameBoard[2] === 'O') {
    console.log('You win')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[3] === 'X' && gameBoard[4] === 'X' && gameBoard[5] === 'X') {
    console.log('You win!')
    $('#new-message').text('You are the winner')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[3] === 'O' && gameBoard[4] === 'O' && gameBoard[5] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[6] === 'X' && gameBoard[7] === 'X' && gameBoard[8] === 'X') {
    console.log('You win')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[6] === 'O' && gameBoard[7] === 'O' && gameBoard[8] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'X' && gameBoard[3] === 'X' && gameBoard[6] === 'X') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'O' && gameBoard[3] === 'O' && gameBoard[6] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[1] === 'X' && gameBoard[4] === 'X' && gameBoard[7] === 'X') {
    console.log('You win')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[1] === 'O' && gameBoard[4] === 'O' && gameBoard[7] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'X' && gameBoard[5] === 'X' && gameBoard[8] === 'X') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'O' && gameBoard[5] === 'O' && gameBoard[8] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'X' && gameBoard[4] === 'X' && gameBoard[8] === 'X') {
    console.log('You win')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[0] === 'O' && gameBoard[4] === 'O' && gameBoard[8] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'X' && gameBoard[4] === 'X' && gameBoard[6] === 'X') {
    console.log('You win')
    $('#new-message').text('you You are the winner!')
    $('#message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  } else if (gameBoard[2] === 'O' && gameBoard[4] === 'O' && gameBoard[6] === 'O') {
    console.log('You win!')
    $('#new-message').text('You are the winner!')
    $('.square').css('pointer-events', 'none')
  }
}

const checkSquare = function (event) {
  if ($(event.target === 'true')) {
    console.log('Invalid move')
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

module.exports = {
  changeLetter,
  checkSquare
}
