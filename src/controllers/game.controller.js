import GameView from '../views/game.view';

class GameController {
  constructor() {
    this.tag = 'app';
    this.render();
  }

  render() {
    document.getElementsByTagName(this.tag)[0].innerHTML = GameView.html();
  }
}

export default GameController;
