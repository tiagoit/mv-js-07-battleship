import ShipModel from '../models/ship.model';

const GameBoard = () => {
  const boardArray = []; // [0|1|Ship]
  const ships = [];

  for (let x = 0; x < 10; x += 1) {
    boardArray[x] = [];
    for (let y = 0; y < 10; y += 1) {
      boardArray[x][y] = 0;
    }
  }

  const renderBoard = () => {
    boardArray.forEach((row, rowIndex) => {
      row.forEach((cellValue, columnIndex) => {
        document.querySelector('.board')
          .querySelector(`.b-row:nth-child(${rowIndex + 1}`)
          .querySelector(`.b-cell:nth-child(${columnIndex + 1}`)
          .innerHTML = cellValue;
      });
    });
  };

  const placeShip = (x, y, length) => {
    const ship = ShipModel(x, y, length);
    ships.push(ship);
    for (let k = 0; k < length; k += 1) {
      boardArray[x][y + k] = ship;
    }
  };

  const receiveAttack = (x, y) => {
    // TODO: Validate movement before this function
    if (boardArray[x][y] === 0) {
      boardArray[x][y] = 1;
    } else { // Ship
      const ship = boardArray[x][y];
      const initialColumn = boardArray[x][y].coordinates.y;
      ship.hit(y - initialColumn);
    }
  };

  const allSunk = () => ships.every(s => s.isSunk());

  return {
    placeShip, receiveAttack, allSunk, renderBoard, boardArray,
  };
};

export default GameBoard;
