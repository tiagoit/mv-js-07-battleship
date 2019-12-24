import ShipModel from '../models/ship.model';

const GameBoard = () => {
  const board = []; // [0|1|Ship]
  const ships = [];

  for (let x = 0; x < 10; x += 1) {
    board[x] = [];
    for (let y; y < 10; y += 1) {
      board[x][y] = 0;
    }
  }

  const placeShip = (x, y, length) => {
    const ship = ShipModel(x, y, length);
    ships.push(ship);
    for (let k = 0; k < length; k += 1) {
      board[x][y + k] = ship;
    }
  };

  const receiveAttack = (x, y) => {
    // TODO: Validate movement before this function
    if (board[x][y] === 0) {
      board[x][y] = 1;
    } else { // Ship
      const ship = board[x][y];
      const initialColumn = board[x][y].coordinates.y;
      ship.hit(y - initialColumn);
    }
  };

  const allSunk = () => ships.every(s => s.isSunk());

  return { placeShip, receiveAttack, allSunk };
};

export default GameBoard;
