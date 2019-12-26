import GameView from '../views/game.view';
import PlayerController from './player.controller';
import AppService from '../app.service';

const GameController = () => {
  const player = [];
  let turn = 0;
  let status = 'pending'; // [pending|placingShips|running]
  const appService = AppService();

  const startBattle = () => {
    player[0].board.renderBoard();
  };

  const start = () => {
    if (document.getElementById('player1').value === '') {
      appService.message('What is your name?');
    } else {
      status = 'placingShips';
      player[0] = PlayerController(document.getElementById('player1').value);
      player[1] = PlayerController('AI');
      // document.getElementById('board').style.pointerEvents = 'all';
      appService.message(`${player[0].getName()} place your ships on the board.`);
      GameView.shipsPlacement(player[0], startBattle);
    }
  };


  // const play = move => {
  //   if (status !== 'running') {
  //     appService.message('Start the game first!');
  //   } else {
  //     const opponent = turn === 0 ? 1 : 0;
  //     player[opponent].board.boardArray[move[0]][move[1]] = 1;
  //     console.log (player[opponent].board.boardArray);
  //     player[opponent].board.renderBoard();
  //     turn = turn === 0 ? 1 : 0;
  //     appService.message(`${player[turn].getName()} is your turn!`);
  //   }
  // };

  GameView.base();
  GameView.playerName(start);
  appService.message('Welcome! Enter your name and click Start!');

  return {};
};

export default GameController;
