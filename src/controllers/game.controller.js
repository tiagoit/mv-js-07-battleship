import GameView from '../views/game.view';
import GameBoard from './game-board.controller';
import PlayerController from './player.controller';

const GameController = () => {
  const tag = 'app';
  const player = [];

  const start = () => {
    player[0] = PlayerController(document.getElementById('player1').value);
    player[1] = PlayerController('AI');
    const turn = 0;
    console.log(player[1].board.boardArray);
  };

  const play = () => {

  };

  const render = () => {
    document.getElementsByTagName(tag)[0].innerHTML = GameView.html();
    document.getElementById('start-game').addEventListener('click', event => {
      start();
    });
  };

  return { render, start };
};

export default GameController;
