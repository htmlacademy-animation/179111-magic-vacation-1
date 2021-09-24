class BackgroundScreen {
  constructor() {
    this.screenBackground = document.querySelector(`.screen-background`);
    this.screenFooter = document.querySelector(`.screen--prizes .screen__footer`);
  }
  enable() {
    this.screenBackground.classList.add(`screen-background--active`);
  }
  disable() {
    this.screenBackground.classList.remove(`screen-background--active`);
    this.screenFooter.animate([
      {transform: `translateY(100%)`},
      {transform: `translateY(0)`}
    ], {
      duration: 300
    });
  }
}

const backgroundScreen = new BackgroundScreen();

export default backgroundScreen;
