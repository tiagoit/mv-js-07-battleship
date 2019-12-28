import GameView from '../views/game.view';
import PlayerController from './player.controller';
import AppService from '../app.service';

const GameController = () => {
  const players = [];
  const appService = AppService();
  let gameInProgress = false;

  // Game is finished if any board have all ships sinked.
  const isFinished = () => players[0].board.allSunk() || players[1].board.allSunk();

  const restartGame = () => document.location.reload();

  const finishGame = win => {
    gameInProgress = false;
    // reveal AI ships
    if (win) { // Human player wins
      appService.message('Unbeliavable, you defeat our AI!', 7);
    } else {
      appService.message('You lose, try again if you dare!', 7);
    }
    GameView.playAgain(restartGame);
  };

  const shot = coords => {
    if (!gameInProgress) return;

    // Human player shots on the AI board
    if (players[1].board.receiveAttack(coords.x, coords.y, shot)) {
      players[1].board.battle(shot); // Re-render the board
      if (isFinished()) finishGame(true); // Human player sink all ai ships

      if (!players[0].aiShot()) {
        // AI give up, game finished
        if (isFinished()) finishGame(true);
      }

      players[0].board.battle(shot); // Re-render the board
      if (isFinished()) finishGame(true); // AI sink all human player ships
    } else { // Player tried to shot on an invalid cell.
      appService.message('You cannot shot the same place twice. Try again!');
    }
  };

  const startBattle = () => {
    gameInProgress = true;
    players[1].aiPlaceShips();
    GameView.battle();
    players[0].board.battle();
    players[1].board.battle(shot);
    appService.message(`${players[0].name} point your canoons to the enemy board!`);
  };

  const startGame = () => {
    if (document.getElementById('player1').value === '') {
      appService.message('What is your name?');
    } else {
      players[0] = PlayerController(document.getElementById('player1').value);
      players[1] = PlayerController('AI');
      appService.message(`${players[0].name} place your ships on the board.`);
      GameView.renderShipsPlacement(players[0], startBattle);
    }
  };

  // Controller initialization
  GameView.base();
  GameView.playerName(startGame);
  appService.message('Welcome! Enter your name and click Start!');

  return { shot };
};

export default GameController;
