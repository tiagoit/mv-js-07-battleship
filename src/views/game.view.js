import GameBoardView from './game-board.view';

class GameView {
  static base() {
    const html = `<h1>Battleship</h1>
      <state></state>`;
    document.getElementsByTagName('app')[0].innerHTML = html;
  }

  static playerName(callback) {
    const html = `
      <p>Dare to challenge yourself against our AI algorithm?</p>
      <p>An advice, it has been training this game for 20 years on an advanced convolutional neural network, so better give your best here.</p>
      <div>
        <input type="text" id ="player1" placeholder="Player name">
        <button id="start-game">Start Game</button>
      </div>`;
    document.getElementsByTagName('state')[0].innerHTML = html;
    document.getElementById('start-game').addEventListener('click', event => {
      callback();
    });
  }

  static shipsPlacement(player, callback) {
    const html = `<p>Hello ${player.getName()}, Place your ships by chosing a length and a starting position (board cell).</p>
      Ship length
      <select id="ship-length" class="mb-2">
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <human-board></human-board>
      <button id="start-battle" class="mt-2 mb-2">Let the battle begins!</button>`;
    document.getElementsByTagName('state')[0].innerHTML = html;
    document.getElementById('start-battle').addEventListener('click', event => {
      callback();
    });
    player.board.shipsPlacement();
  }

  static battle() {
    const html = `<div class="battle-boards">
      <human-board></human-board>
      <ai-board></ai-board>
      </div>`;
    document.getElementsByTagName('state')[0].innerHTML = html;
  }


  static playAgain(callback) {
    const html = `<div id="restart-game">
      <button id="play-again">Play again</button>
      <div>OR</div>
      Learn about <a href="https://www.gamedev.net/articles/programming/artificial-intelligence/the-total-beginners-guide-to-game-ai-r4942/">Beginners Guide to game AI</a>.
    </div>`;
    document.getElementsByTagName('state')[0].innerHTML = html;
  }
}

export default GameView;
