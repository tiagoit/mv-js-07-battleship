import GameBoard from './game-board.controller';
import AppService from '../app.service';

const PlayerController = (n) => {
  const board = GameBoard(n === 'AI' ? 'AI' : 'Human');
  const appService = AppService();
  const name = n;

  const aiPlaceShips = () => {
    board.placeShip(0, 0, 3, false);

    // let shipBlocks = 20;
    // while (shipBlocks > 1) {
    //   const x = appService.rand(0, 9);
    //   const y = appService.rand(0, 9);
    //   const len = appService.rand(2, 5);

    //   if (board.placeShip(x, y, len, false)) {
    //     shipBlocks -= len;
    //   }
    // }
  };

  const aiShot = () => {
    let x;
    let y;
    let count = 0;
    do {
      count += 1;
      x = appService.rand(0, 9);
      y = appService.rand(0, 9);
      if (board.receiveAttack(x, y)) {
        return true;
      }
    } while (count < 50);
    return false;
  };

  return {
    name,
    board,
    aiPlaceShips,
    aiShot,
  };
};

export default PlayerController;
