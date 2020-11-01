const gameboard = document.getElementsByClassName('game-board')[0];

for (let i = 4; i > 0; i -= 1) {
  const raw = document.createElement('div');
  raw.className = `raw-${i}`;
  gameboard.insertBefore(raw, gameboard.firstChild);
  for (let j = 4; j > 0; j -= 1) {
    const col = document.createElement('div');
    col.className = `column col-${j}`;
    raw.insertBefore(col, raw.firstChild);
  }
}

const column = document.getElementsByClassName('column');
// eslint-disable-next-line no-restricted-syntax
for (const element of column) {
  element.style = 'width: 120px; height: 120px; color: blue; display: inline-block; border: 4px solid black; margin-left: 4px';
}

let cellRaw = 0;
let cellCol = 0;

const image = document.createElement('img');
image.style = 'display:flex;';
image.setAttribute('src', 'https://raw.githubusercontent.com/Vadim2107/AHJ_dom/main/src/img/goblin.png');

function showImage() {
  const rawRandom = Math.floor(Math.random() * 4 + 1);
  const colRandom = Math.floor(Math.random() * 4 + 1);

  if (`${cellRaw}${cellCol}` === `${rawRandom}${colRandom}`) {
    showImage();
  } else {
    cellRaw = rawRandom;
    cellCol = colRandom;
    const rawImage = document.getElementsByClassName(`raw-${cellRaw}`)[0];
    const colImage = rawImage.getElementsByClassName(`col-${cellCol}`)[0];
    colImage.insertBefore(image, colImage.firstChild);
  }
}

setInterval(showImage, 1000);
