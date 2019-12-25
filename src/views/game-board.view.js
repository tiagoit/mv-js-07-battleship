class GameBoardView {
  static html() {
    let html = '<div class="board">';
    for (let i = 0; i < 10; i += 1) {
      html += '<div class="b-row">';
      for (let j = 0; j < 10; j += 1) {
        html += `<div data-id="${i}${j}"></div>`;
      }
      html += '</div>';
    }
    html += '</div>';
    return html;
  }
}

export default GameBoardView;
