import GameView from '../views/game.view';
import PlayerController from './player.controller';
import AppService from '../app.service';

const GameController = () => {
  const players = [];
  // let status = 'pending'; // [pending|placingShips|running]
  const appService = AppService();

  const shot = coords => {
    if (players[1].board.receiveAttack(coords.x, coords.y)) {
      // AI shot
      const shotCoord = players[0].aiShot(shot);
      players[0].board.receiveAttack(shotCoord.x, shotCoord.y);
    } else {
      appService.message('You cannot shot the same place twice. Try again!');
    }
  };

  const startBattle = () => {
    players[1].aiPlaceShips();
    GameView.battle();
    players[0].board.renderForBattle();
    players[1].board.renderForBattle(shot);
    appService.message(`${players[0].getName()} is your turn!`);
  };

  const start = () => {
    if (document.getElementById('player1').value === '') {
      appService.message('What is your name?');
    } else {
      // status = 'placingShips';
      players[0] = PlayerController(document.getElementById('player1').value);
      players[1] = PlayerController('AI');
      appService.message(`${players[0].getName()} place your ships on the board.`);
      GameView.shipsPlacement(players[0], startBattle);
    }
  };

  GameView.base();
  GameView.playerName(start);
  appService.message('Welcome! Enter your name and click Start!');

  return { shot };
};

export default GameController;
