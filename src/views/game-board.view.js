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
        callback(x, y, parseInt(length, 10));
      });
    });
  }

  static battle(boardArray, playerType, callback) {
    const boardHtml = GameBoardView.board(boardArray, playerType);
    if (playerType === 'AI') {
      const boardEl = document.getElementsByTagName('ai-board')[0];
      boardEl.innerHTML = boardHtml;
      boardEl.querySelectorAll('.b-row > div').forEach((el) => {
        el.addEventListener('click', (ev) => {
          const x = parseInt(ev.target.dataset.id[0], 10);
          const y = parseInt(ev.target.dataset.id[1], 10);
          callback({ x, y });
          this.battle(boardArray, playerType, callback);
        });
      });
    } else {
      const boardEl = document.getElementsByTagName('human-board')[0];
      boardEl.innerHTML = boardHtml;
    }
  }


  static board(boardArray, playerType) {
    let html = playerType === 'AI' ? '<h3>Artificial Intelligence board</h3>' : '<h3>My board</h3>';
    html += '<div class="board mt-2 mb-2">';
    for (let i = 0; i < 10; i += 1) {
      html += '<div class="b-row">';
      for (let j = 0; j < 10; j += 1) {
        html += `<div data-id="${i}${j}">`;
        if (boardArray[i][j] === 1) {
          html += '<div class="shot"></div>';
        } else if (boardArray[i][j] !== 0) {
          const ship = boardArray[i][j];
          let sclass;
          if (ship.coordinates.y === j) sclass = 'ship-left';
          else if (j === ship.coordinates.y + parseInt(ship.length, 10) - 1) sclass = 'ship-right';
          else sclass = 'ship-middle';
          html += `<div class="ship ${sclass}">`;
          if (ship.hits[ship.coordinates.y - j] === 1) {
            html += '<div class="shot"></div>';
          }
          html += '</div>';
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
