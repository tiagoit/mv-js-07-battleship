import GameBoard from './game-board.controller';

const PlayerController = (name) => {
  const board = GameBoard();

  const getName = () => name;

  return { getName, board };
};

export default PlayerController;
