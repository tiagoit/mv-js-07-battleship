import PlayerController from "../src/controllers/player.controller";
import GameBoard from "../src/controllers/game-board.controller";
describe('PlayerController', () => {
  let player1;
  let AI;
  
  beforeEach(() => {
    player1 = PlayerController('player1');
    AI = PlayerController('AI');
  });
  
  it('player 1 has a board', () => {
    expect(player1.board).toBeInstanceOf(Object)
  });
});
