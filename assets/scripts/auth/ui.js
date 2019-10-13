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

  store.user = responseData.user
  $('.passwordempty').val('')
  $('.emailempty').val('')
  setTimeout(function () { $('#message').text('') }, 1000)

  $('#sign-out').show()
  $('#new-game').show()
  $('#change-password').show()
  $('#get-games').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const onSignInFailure = function () {
  failureMessage('Sign in failed!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.passwordempty').val('')
  $('.emailempty').val('')
}

const onSignUpSuccess = function () {
  successMessage('Signed up successfully!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.passwordempty').val('')
  $('.emailempty').val('')
}
const onSignUpFailure = function () {
  failureMessage('Sign up failed!')
  setTimeout(function () { $('#message').text('') }, 1000)

  $('.passwordempty').val('')
  $('.emailempty').val('')
}

const onChangePasswordSuccess = function () {
  successMessage('Changed password successfully!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.passwordempty').val('')
}
const onChangePasswordFailure = function () {
  failureMessage('Change password failed!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.passwordempty').val('')
}

const onSignOutSuccess = function () {
  successMessage('Signed out successfully!')

  setTimeout(function () { $('#message').text('') }, 1000)
  $('.emailempty').val('')
  $('#sign-out').hide()
  $('#new-game').hide()
  $('#change-password').hide()
  $('#get-games').hide()
  $('#sign-up').show()
  $('#sign-in').show()
}
const onSignOutFailure = function () {
  failureMessage('Sign out failed!')
  setTimeout(function () { $('#message').text('') }, 1000)
}

module.exports = {
  onSignUpFailure,
  onSignUpSuccess,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordFailure,
  onChangePasswordSuccess,
  onSignOutFailure,
  onSignOutSuccess

}
