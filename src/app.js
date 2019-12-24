import './scss/style.scss';
import GameController from './controllers/game.controller';

const app = () => {
  const game = GameController();
  game.render();
};  

app();
