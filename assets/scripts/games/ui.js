'use strict'

const store = require('../store')

const successMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('failure')
  $('#message').addClass('success')
}

const failureMessage = function (newText) {
  $('#message').text(newText)
  $('#message').removeClass('success')
  $('#message').addClass('failure')
}

const onNewGameSuccess = function (responseData) {
  successMessage('Successfully created game')
  store.game = responseData.game
  setTimeout(function () { $('#message').text('') }, 1000)
  $('.board-container').show()
}
const onNewGameFailure = function (responseData) {
  failureMessage('You have not created a new game')
  setTimeout(function () { $('#message').text('') }, 1000)
  store.game = responseData.game
}

const onGetGamesSuccess = function (responseData) {
  successMessage('Successfully get games')
  setTimeout(function () { $('#message').text('') }, 1000)

  $('#number-games').text('Amount of played games is:' + responseData.games.length)
  setTimeout(function () { $('#number-games').text('') }, 1000)
}

const onUpdateGameFailure = function (responseData) {
  failureMessage('You have not updated a new game')
}
const onUpdateGameSuccess = function (responseData) {
  // successMessage('Successfully updated games')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onGetGamesSuccess,
  onUpdateGameFailure,
  onUpdateGameSuccess
}
