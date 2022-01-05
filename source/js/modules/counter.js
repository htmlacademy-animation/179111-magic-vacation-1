export default (dur) => {
  const c = document.querySelector(`.game__counter`);
  const minSpan = Array.from(c.querySelectorAll(`span`))[0];
  const secSpan = Array.from(c.querySelectorAll(`span`))[1];

  let start = false;
  let now;
  let then = 60;
  let elapsed;

  const draw = (min = dur, sec = 0) => {
    minSpan.textContent = `0${min}`.slice(-2);
    secSpan.textContent = `0${sec}`.slice(-2);
  };

  const tick = (startTime) => {
    requestAnimationFrame(() => {
      tick(startTime);
    });
    const totalSeconds = Math.floor(((dur * 60000) - (new Date(Date.now() - startTime).getTime())) / 1000);

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);

    now = Date.now();
    elapsed = now - then;
    if (minutes >= 0 && elapsed > 1000) {
      then = now - (elapsed % 1000);
      draw(minutes, seconds);
    }
  };

  document.body.addEventListener(`screenChanged`, (e) => {
    if (e.detail.screenName === `game` && start === false) {
      start = true;
      draw();
      tick(Date.now());
    }
  });
};
