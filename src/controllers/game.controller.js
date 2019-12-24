import GameView from '../views/game.view';
import GameBoard from "./game-board.controller";
import Player from "./player.controller";

const GameController =() => {
  
  const tag = 'app';
  const players = [];
  const board =
  render();
  
  const start = () => {
    player[0] = Player(document.getElementById('player1').value);
    player[1] = "AI";
    render()
    player[1].receiveAttack(x, y)
  };

  const render = () => {
    document.getElementsByTagName(this.tag)[0].innerHTML = GameView.html();
  };
  
  return { getPlayer, render }
};

export default GameController;
