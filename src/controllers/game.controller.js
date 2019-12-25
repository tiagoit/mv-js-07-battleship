import GameView from '../views/game.view';
import PlayerController from './player.controller';

const GameController = () => {
  const tag = 'app';
  const player = [];
  let turn = 0;
  let opponent = 1;
  let status = 'pending';

  const start = () => {
    status = 'running';
    player[0] = PlayerController(document.getElementById('player1').value);
    player[1] = PlayerController('AI');
    document.getElementById('board').style.pointerEvents = 'all';
    document.getElementById('message').innerHTML = `${player[turn].getName()} is your turn!`;
    player[1].board.renderBoard();
  };

  const sendMessage = (msg) => {
    document.getElementById('message').innerHTML = `<p>${msg}</p>`;
  };

  const play = move => {
    if (status !== 'running') {
      sendMessage('Start the game first!');
    } else {
      if (turn === 0) { opponent = 1; } else { opponent = 0; }
      player[opponent].board.boardArray[move[0]][move[1]] = 1;
      console.log (player[opponent].board.boardArray);
      player[opponent].board.renderBoard();
      turn = turn === 0 ? 1 : 0;
      sendMessage(`${player[turn].getName()} is your turn!`);
    }
  };

  const render = () => {
    document.getElementsByTagName(tag)[0].innerHTML = GameView.html();
    document.getElementById('start-game').addEventListener('click', event => {
      start();
    });
  };

  return { render, start, play };
};

export default GameController;
