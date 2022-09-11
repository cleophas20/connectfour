document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  const winningArrays = [
    [0, 1, 2, 3],
    [7, 8, 9, 10],
    [14, 15, 16, 17],
    [21, 22, 23, 24],
    [28, 29, 30, 31],
    [1, 2, 3, 4],
    [8, 9, 10, 11],
    [15, 16, 17, 18],
    [22, 23, 24, 25],
    [29, 30, 31, 32],
    [2, 3, 4, 5],
    [9, 10, 11, 12],
    [16, 17, 18, 19],
    [23, 24, 25, 26],
    [30, 31, 32, 33],
    [3, 4, 5, 6],
    [10, 11, 12, 13],
    [17, 18, 19, 20],
    [24, 25, 26, 27],
    [31, 32, 33, 34],
    [0, 7, 14, 21],
    [1, 8, 15, 22],
    [2, 9, 16, 23],
    [3, 10, 17, 24],
    [4, 11, 18, 25],
    [5, 12, 19, 26],
    [6, 13, 20, 27],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
    [0, 8, 16, 24],
    [1, 9, 17, 25],
    [2, 10, 18, 26],
    [3, 11, 19, 27],
    [7, 15, 23, 31],
    [8, 16, 24, 32],
    [9, 17, 25, 33],
    [10, 18, 26, 34],
    [3, 9, 15, 21],
    [4, 10, 16, 22],
    [5, 11, 17, 23],
    [6, 12, 18, 24],
    [10, 16, 22, 28],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [13, 19, 25, 31],
  ]

  function checkBoard() {
    for (let y = 0; y < winningArrays.length; y++) {
      const square1 = squares[winningArrays[y] [0]]
      const square2 = squares[winningArrays[y] [1]]
      const square3 = squares[winningArrays[y] [2]]
      const square4 = squares[winningArrays[y] [3]]

      //check those squares to see if they all have the class of player-one
      if (
        square1.classList.contains('player-one') &&
        square2.classList.contains('player-one') &&
        square3.classList.contains('player-one') &&
        square4.classList.contains('player-one')
      ){
        result.innerHTML = 'Player One Wins!'
      }
      //check those squares to see if they all have the class of player-two
      if (
        square1.classList.contains('player-two') &&
        square2.classList.contains('player-two') &&
        square3.classList.contains('player-two') &&
        square4.classList.contains('player-two')
      ){
        result.innerHTML = 'Player Two Wins!'
      }
    }
  }


  for (let i=0; i < squares.length; i++) {
    squares[i].onclick = () => {
      //if the square below your current square is taken, you can go on top of setInterval(function () {
      if (squares[i + 7].classList.contains('taken') &&!squares[i].classList.contains('taken')) {
        if (currentPlayer == 1) {
          squares[i].classList.add('taken')
          squares[i].classList.add('player-one')
          currentPlayer = 2
          displayCurrentPlayer.innerHTML = currentPlayer
        } else if (currentPlayer == 2) {
          squares[i].classList.add('taken')
          squares[i].classList.add('player-two')
          currentPlayer = 1
          displayCurrentPlayer.innerHTML = currentPlayer
        }
      } else alert('cant go here')
      checkBoard()
    }
  }



})
