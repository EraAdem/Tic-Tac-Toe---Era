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
  console.log('store is', store)
  $('.board-container').show()
}
const onNewGameFailure = function (responseData) {
  failureMessage('You have not created a new game')
  store.game = responseData.game
  console.log('store is', store)
}

const onGetGamesSuccess = function (responseData) {
  successMessage('Successfully get games')
  console.log(responseData)

  console.log('store is', store)
  $('#number-games').text('Amount of played games is:' + responseData.games.length)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onGetGamesSuccess
}
