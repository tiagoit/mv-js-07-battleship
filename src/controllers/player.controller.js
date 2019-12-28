import GameBoard from './game-board.controller';
import AppService from '../app.service';

const PlayerController = (n) => {
  const board = GameBoard(n === 'AI' ? 'AI' : 'Human');
  const appService = AppService();
  const name = n;
  
  const aiPlaceShips = () => {
    let shipBlocks = 20;
    while (shipBlocks > 1) {
      const x = appService.rand(0, 9);
      const y = appService.rand(0, 9);
      const len = appService.rand(2, 5);

      if (board.placeShip(x, y, len, false)) {
        shipBlocks -= len;
      }
    }
  };

  const aiShot = () => {
    let x, y;
    let validShot = false;
    do {
      x = appService.rand(0, 9);
      y = appService.rand(0, 9);
      if (board.boardArray[x][y] === 0) {
        validShot = true;
      // } else if (board.boardArray[x][y] !== 1) {
      //   const ship = board.boardArray[x][y];
      //   if (ship.hits[y - ship.coordinates.y] === 0) {
      //     validShot = true;
      //   }
      }
    } while (!validShot);
    board.receiveAttack(x, y);
  };

  return { name, board, aiPlaceShips, aiShot };
};

export default PlayerController;
