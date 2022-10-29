let turn = 'x';
let title = document.querySelector(".title");
let squares = [];

function result(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} winner`;
  document.getElementById('item' + num1).style.background = 'rgba(236, 64, 38, 0.6)';
  document.getElementById('item' + num2).style.background = 'rgba(236, 64, 38, 0.6)';
  document.getElementById('item' + num3).style.background = 'rgba(236, 64, 38, 0.6)';

  setInterval(function () { title.innerHTML += '.' }, 1000)
  setTimeout(function () { location.reload() }, 3000)
}

function winner() {
  for (let i = 1; i < 10; i++) {
    squares[i] = document.getElementById("item" + i).innerHTML;
  } if (squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '') {
    result(1, 2, 3)
  } else if (squares[4] == squares[5] && squares[5] == squares[6] && squares[4] != '') {
    result(4, 5, 6)
  } else if (squares[7] == squares[8] && squares[8] == squares[9] && squares[7] != '') {
    result(7, 8, 9)
  } else if (squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '') {
    result(1, 4, 7)
  } else if (squares[2] == squares[5] && squares[5] == squares[8] && squares[2] != '') {
    result(2, 5, 8)
  } else if (squares[3] == squares[6] && squares[6] == squares[9] && squares[3] != '') {
    result(3, 6, 9)
  } else if (squares[1] == squares[5] && squares[5] == squares[9] && squares[1] != '') {
    result(1, 5, 9)
  } else if (squares[3] == squares[5] && squares[5] == squares[7] && squares[3] != '') {
    result(3, 5, 7)
  }


  else if (squares[1] == squares[2] && squares[2] != squares[3] && squares[3] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[4] == squares[5] && squares[5] != squares[6] && squares[6] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[7] == squares[8] && squares[8] != squares[9] && squares[9] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[1] == squares[4] && squares[4] != squares[7] && squares[7] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[2] == squares[5] && squares[5] != squares[8] && squares[8] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[3] == squares[6] && squares[6] != squares[9] && squares[9] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[1] == squares[5] && squares[5] != squares[9] && squares[9] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  } else if (squares[3] == squares[5] && squares[5] != squares[7] && squares[7] != '' && squares[1, 2, 3, 4, 5, 6, 7, 8, 9] != '') {
    setInterval(function () { title.innerHTML += '.' }, 500)
    setTimeout(function () { location.reload() }, 2000)
  }
}


function game(id) {
  let element = document.getElementById(id)
  if (turn == 'x' && element.innerHTML == '') {
    element.innerHTML = 'X'
    turn = 'o'
    title.innerHTML = 'O'
  } else if (turn == 'o' && element.innerHTML == '') {
    element.innerHTML = 'O'
    turn = 'x'
    title.innerHTML = 'X'
  } winner()
}
