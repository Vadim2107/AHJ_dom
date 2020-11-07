const gameboard = document.getElementsByClassName('game-board')[0];

for (let i = 4; i > 0; i -= 1) {
  const row = document.createElement('div');
  row.className = `row-${i}`;
  gameboard.insertBefore(row, gameboard.firstChild);
  for (let j = 4; j > 0; j -= 1) {
    const col = document.createElement('div');
    col.className = `column col-${j}`;
    row.insertBefore(col, row.firstChild);
  }
}

const column = document.getElementsByClassName('column');
// eslint-disable-next-line no-restricted-syntax
for (const element of column) {
  element.style = 'width: 120px; height: 120px; background: #eee; display: inline-block; border: 4px solid black; border-radius: 50%; margin-left: 4px';
}

let cellRow = 0;
let cellCol = 0;

const image = document.createElement('img');
image.style = 'display:flex;';
image.setAttribute('src', 'https://row.githubusercontent.com/Vadim2107/AHJ_dom/main/src/img/goblin.png');
// image.setAttribute('src', 'url(../img/goblin.png)');

function showImage() {
  const rowRandom = Math.floor(Math.random() * 4 + 1);
  const colRandom = Math.floor(Math.random() * 4 + 1);

  if (`${cellRow}${cellCol}` === `${rowRandom}${colRandom}`) {
    showImage();
  } else {
    cellRow = rowRandom;
    cellCol = colRandom;
    const rowImage = document.getElementsByClassName(`row-${cellRow}`)[0];
    const colImage = rowImage.getElementsByClassName(`col-${cellCol}`)[0];
    colImage.insertBefore(image, colImage.firstChild);
  }
}

setInterval(showImage, 700);
