import PlayerController from '../src/controllers/player.controller';

describe('PlayerController', () => {
  const player1 = PlayerController('player1');

  it('player 1 has a board', () => {
    expect(player1).toBeDefined();
    expect(player1.board).toBeDefined();
    expect(player1.board).toBeInstanceOf(Object);
  });
});
