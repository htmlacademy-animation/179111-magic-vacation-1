const createRowNode = (textRow) => {
  const span = document.createElement(`SPAN`);
  span.className = `letters`;
  span.innerHTML = textRow;
  return span;
};

const createLetterNode = (nodeRow, animationOptions) => {
  const {duration, delay} = animationOptions;
  const fragment = document.createDocumentFragment();
  [...nodeRow.textContent].map((letter) => {
    const span = document.createElement(`SPAN`);
    span.className = `letters__item`;
    span.style.animationDuration = `${duration}ms`;
    span.style.animationDelay = `${delay * Math.random()}ms`;
    span.textContent = letter;
    fragment.appendChild(span);
  });
  nodeRow.innerHTML = null;
  nodeRow.appendChild(fragment);
  return nodeRow;
};

export default (node, animationOptions) => {
  const newNodes = node.textContent
    .trim()
    .split(` `)
    .map((textRow) => createRowNode(textRow))
    .map((nodeRow) => createLetterNode(nodeRow, animationOptions));

  const fragment = document.createDocumentFragment();

  newNodes.forEach((item) => {
    fragment.appendChild(item);
  });
  node.innerHTML = null;
  node.appendChild(fragment);
};
