import Scene2DSeaCalf from './canvas/scene-2d-sea-calf.js';
import SceneFail from './canvas/crocodile';

export default () => {
  let showResultEls = document.querySelectorAll(`.js-show-result`);
  let results = document.querySelectorAll(`.screen--result`);
  if (results.length) {
    for (let i = 0; i < showResultEls.length; i++) {
      showResultEls[i].addEventListener(`click`, function () {
        let target = showResultEls[i].getAttribute(`data-target`);
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        let targetEl = [].slice.call(results).filter(function (el) {
          return el.getAttribute(`id`) === target;
        });
        targetEl[0].classList.add(`screen--show`);
        targetEl[0].classList.remove(`screen--hidden`);
        animateResultText(targetEl[0]);

        if (targetEl[0].id === `result`) {
          const sceneCanvasAnimation = new Scene2DSeaCalf();
          sceneCanvasAnimation.beginAnimation();
        }
        if (targetEl[0].id === `result3`) {
          const sceneFailAnimation = new SceneFail();
          sceneFailAnimation.beginAnimation();
        }
      });
    }

    let playBtn = document.querySelector(`.js-play`);
    if (playBtn) {
      playBtn.addEventListener(`click`, function () {
        [].slice.call(results).forEach(function (el) {
          el.classList.remove(`screen--show`);
          el.classList.add(`screen--hidden`);
        });
        document.getElementById(`messages`).innerHTML = ``;
        document.getElementById(`message-field`).focus();
      });
    }
  }

  //
  const animateStrokeDasharray = (letter, length) => {
    const animateSVGTag = document.createElementNS(`http://www.w3.org/2000/svg`, `animate`);
    [
      {name: `attributeName`, value: `stroke-dasharray`},
      {name: `begin`, value: `300ms`},
      {name: `to`, value: `${length}, 0`},
      {name: `dur`, value: `600ms`},
      {name: `fill`, value: `freeze`}
    ].forEach(({name, value}) => animateSVGTag.setAttribute(name, value));
    letter.appendChild(animateSVGTag);
  };

  const animateResultText = (element) => {
    element.querySelectorAll(`.svg-result-text path`).forEach((letter) => {
      const length = letter.getTotalLength() / 3;
      letter.setAttribute(`stroke-dasharray`, `0, ${length}`);
      animateStrokeDasharray(letter, length);
    });
  };
};
