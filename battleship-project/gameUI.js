import { createShip } from './ship';
import { createGameboard } from './gameboard';

const playerboardContainer = document.querySelector('[data-playerboard-container]');
const computerBoardContainer = document.querySelector('[data-computerboard-container]');

export function createGameUI() {
  function renderGameboard(gameboard) {
    let count = 0;
    const gameboardContainer = document.createElement('div');
    gameboardContainer.classList.add('gameboard');
    for (let i = 0; i < gameboard.length; i++) {
      const row = gameboard[i];
      for (let j = 0; j < row.length; j++) {
        const cell = row[j];
        const cellDiv = document.createElement('div');
        cellDiv.id = `${count}`;
        count++;
        cellDiv.classList.add('cell');
        if (cell === 'X' || cell === 'O') {
          cellDiv.classList.add('attacked');
        } else if (cell === 'miss') {
          cellDiv.classList.add('missed');
        } else if (cell === 'sunk') {
          cellDiv.classList.add('sunk');
        } else if (cell !== null) {
          cellDiv.classList.add('cell__ship');
        }
        gameboardContainer.appendChild(cellDiv);
      }
    }
    return gameboardContainer;
  }

  function renderPlayerBoard(gameboard) {
    let gameboardContainer;
    playerboardContainer.innerHTML = '';
    gameboardContainer = renderGameboard(gameboard);
    playerboardContainer.appendChild(gameboardContainer);
  }

  function renderComputerBoard(gameboard) {
    let gameboardContainer;
    computerBoardContainer.innerHTML = '';
    gameboardContainer = renderGameboard(gameboard);
    computerBoardContainer.appendChild(gameboardContainer);
  }

  return {
    renderPlayerBoard,
    renderComputerBoard,
  };
}
