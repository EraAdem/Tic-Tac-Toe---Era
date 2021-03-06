'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-out').hide()
  $('#new-game').hide()

  $('#change-password').hide()
  $('#get-games').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onNewGame)
  $('#get-games').on('submit', gameEvents.onGetGames)
  $('.square').on('click', gameEvents.changeLetter)
})
