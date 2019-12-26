import GameBoard from './game-board.controller';

const PlayerController = (name) => {
  const board = GameBoard(name === 'AI' ? 'AI' : 'Human');

  const getName = () => name;

  return { getName, board };
};

export default PlayerController;
