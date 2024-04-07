import { createShip } from './ship';
import { createGameboard } from './gameboard';
import { createGameUI } from './gameUI';

export function createGameStatus() {
  const destroyer = createShip(2);
  const submarine = createShip(3);
  const cruiser = createShip(3);
  const battleship = createShip(4);
  const carrier = createShip(5);
  let ships = [destroyer, submarine, cruiser, battleship, carrier];
  const playerUI = createGameUI();
  const compUI = createGameUI();
  const playerBoard = createGameboard();
  const computerBoard = createGameboard();
  playerUI.renderPlayerBoard(playerBoard.board);
  compUI.renderComputerBoard(computerBoard.board);

  function computerRandomPlacer() {
    ships.forEach((ship) => {
      let placed = false;
      while (!placed) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const orientation = Math.random() < 0.5 ? 'horizontal' : 'vertical';
        if (computerBoard.placeShip(ship, row, col, orientation)) {
          placed = true;
        }
      }
    });
    compUI.renderComputerBoard(computerBoard.board);
  }

  function getShips() {
    return ships;
  }

  return { getShips, computerRandomPlacer };
}
