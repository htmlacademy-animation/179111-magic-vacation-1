// modules
import mobileHeight from './modules/mobile-height-adjust.js';
import slider from './modules/slider.js';
import menu from './modules/menu.js';
import footer from './modules/footer.js';
import chat from './modules/chat.js';
import result from './modules/result.js';
import form from './modules/form.js';
import social from './modules/social.js';
import FullPageScroll from './modules/full-page-scroll';
import textSplitter from './modules/text-splitter';

// init modules
mobileHeight();
slider();
menu();
footer();
chat();
result();
form();
social();

// Анимация акцентной типографики
const animationOptions = {
  'intro__title': {duration: `750`, delay: `350`},
  'intro__date': {duration: `600`, delay: `250`},
  'slider__item-title': {duration: `600`, delay: `250`},
  'prizes__title': {duration: `600`, delay: `250`},
  'rules__title': {duration: `600`, delay: `250`},
  'game__title': {duration: `600`, delay: `250`},
  'game__counter': {duration: `600`, delay: `250`},
};

window.addEventListener(`load`, () => {
  document.body.classList.add(`js-load-complete`);
  Object.keys(animationOptions).forEach((className) => {
    textSplitter(document.querySelector(`.${className}`), animationOptions[className]);
  });
});

const fullPageScroll = new FullPageScroll();
fullPageScroll.init();
