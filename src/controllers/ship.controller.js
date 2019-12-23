// import ShipView from '../views/ship.view';
// import ShipModel from '../models/ship.model';

class ShipController {
  constructor() {
    this.tag = 'ship';
    // this.render();
  }

  render() {
    document.getElementsByTagName(this.tag)[0].innerHTML = GameView.html();
  }
}

export default ShipController;
