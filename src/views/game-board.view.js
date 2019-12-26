class GameBoardView {
  static shipsPlacement(boardArray, callback) {
    const boardHtml = GameBoardView.board(boardArray);
    const boardEl = document.getElementsByTagName('human-board')[0];
    boardEl.innerHTML = boardHtml;
    boardEl.querySelectorAll('.b-row > div').forEach((el) => {
      el.addEventListener('click', (ev) => {
        const x = parseInt(ev.target.dataset.id[0], 10);
        const y = parseInt(ev.target.dataset.id[1], 10);
        const length = document.getElementById('ship-length').value;
        callback(x, y, length);
      });
    });
  }

  static board(boardArray) {
    let html = '<div class="board">';
    for (let i = 0; i < 10; i += 1) {
      html += '<div class="b-row">';
      for (let j = 0; j < 10; j += 1) {
        html += `<div data-id="${i}${j}">`;
        if (boardArray[i][j] !== 0) {
          const ship = boardArray[i][j];
          let sclass;
          if (ship.coordinates.y === j) sclass = 'ship-left';
          else if (j === ship.coordinates.y + parseInt(ship.length, 10) - 1) sclass = 'ship-right';
          else sclass = 'ship-middle';
          html += `<div class="ship ${sclass}"></div>`;
        }
        html += '</div>';
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }
}

export default GameBoardView;
