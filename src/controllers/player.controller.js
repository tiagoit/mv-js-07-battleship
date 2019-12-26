import GameBoard from './game-board.controller';

const PlayerController = (name) => {
  const board = GameBoard(name === 'AI' ? 'AI' : 'Human');

  const getName = () => name;

  const aiShot = (callback) => {
    console.log('ai shot');
    let x;
    let y;
    let validShot = false;
    do {
      x = parseInt(Math.random(0, 1) * 10, 10);
      y = parseInt(Math.random(0, 1) * 10, 10);
      if (board.boardArray[x][y] === 0) {
        validShot = true;
      } else if (board.boardArray[x][y] !== 1) {
        const ship = board.boardArray[x][y];
        if (!ship.hits[y - ship.coords.y] === 0) {
          validShot = true;
        }
      }
    } while (!validShot);
    return { x, y };
  };

  return { getName, board, aiShot };
};

export default PlayerController;
