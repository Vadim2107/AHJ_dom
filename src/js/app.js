import img from '../img/goblin.png';

const gameBoard = document.getElementsByClassName('game-board')[0];

for (let i = 1; i < 5; i += 1) {
  const row = document.createElement('div');
  row.className = `row_${i}`;
  gameBoard.append(row);
  for (let j = 1; j < 5; j += 1) {
    const col = document.createElement('div');
    col.className = `column col_${j}`;
    row.append(col);
    col.style = 'width: 120px; height: 120px; background: rgb(77, 77, 77); display: inline-block; border: 4px solid black; border-radius: 50%; margin-right: 8px';
  }
}

const image = document.createElement('img');
image.style = 'display: flex;';
image.src = img;

let holeRow = 0;
let holeCol = 0;

function showImage() {
  const rowRandom = Math.floor(Math.random() * 4 + 1);
  const colRandom = Math.floor(Math.random() * 4 + 1);

  if (`${holeRow}${holeCol}` === `${rowRandom}${colRandom}`) {
    showImage();
  } else {
    holeRow = rowRandom;
    holeCol = colRandom;
    const rowImage = document.getElementsByClassName(`row_${holeRow}`)[0];
    const colImage = rowImage.getElementsByClassName(`col_${holeCol}`)[0];
    colImage.append(image);
  }
}

setInterval(showImage, 700);
