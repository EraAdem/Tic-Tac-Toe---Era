
'use strict'
const config = require('../config')
const store = require('../store')

const newGame = () => {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: '{}'
  })
}

const getGames = (data) => {
  return $.ajax({
    url: config.apiUrl + `/games`,
    method: 'GET',
    contentType: 'application/json',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// Update a game by storing new moves. (UPDATE)

// PATCH request after each player move

const updateGame = function (index, value, over) {
  const dataObj = {
    game: {
      cell: {
        index: index,
        value: value
      },
      over: over
    }
  }

  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: dataObj
  })
}

module.exports = {
  newGame,
  getGames,
  updateGame

}
