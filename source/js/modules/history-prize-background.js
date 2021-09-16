class BackgroundScreen {
  constructor(node) {
    this.__node = node;
  }
  enable() {
    this.__node.classList.add(`screen-background--active`);
  }
  disable() {
    this.__node.classList.remove(`screen-background--active`);
  }
}

const backgroundScreenElement = document.querySelector(`.screen-background`);
const backgroundScreen = new BackgroundScreen(backgroundScreenElement);

export default backgroundScreen;
