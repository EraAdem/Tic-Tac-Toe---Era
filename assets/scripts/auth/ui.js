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

const onSignInSuccess = function (responseData) {
  successMessage('Signed in successfully!')
  console.log('responseData is', responseData)
  store.user = responseData.user
  console.log('store is', store)
}
const onSignInFailure = function () {
  failureMessage('Sign in failed!')
  console.log('Sign in failed')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')
  console.log('Signed up successfully!')
}
const onSignUpFailure = function () {
  failureMessage('Sign up failed!')
  console.log('Sign up failed!')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')
  console.log('Changed password successfully!')
}
const onChangePasswordFailure = function () {
  failureMessage('Change password failed!')
  console.log('Change password failed!')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')
  console.log('Signed out successfully!')
}
const onSignOutFailure = function () {
  failureMessage('Sign out failed!')
  console.log('Sign out failed!')
}

const onNewGameSuccess = function (responseData) {
  successMessage('Successfully updated game')
  store.game = responseData.game
  console.log('store is', store)
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
  $('#number-games').text('Amount of played games is: ')
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess,
  onNewGameSuccess,
  onNewGameFailure,
  onGetGamesSuccess
}
