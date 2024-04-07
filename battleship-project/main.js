import './style.css';
import { createShip } from './ship';
import { createGameboard } from './gameboard';
import { createGameUI } from './gameUI';
import { createGameStatus } from './gameStatus';

const initGame = createGameStatus();
initGame.computerRandomPlacer();
/* playerBoard.placeShip(ship3 ,7 ,0 , true)

playerBoard.receiveAttack(7, 0);
console.log(ship3.getShipHP())
playerBoard.receiveAttack(7, 0);
console.log(ship3.getShipHP())
playerBoard.receiveAttack(7, 1);
console.log(ship3.getShipHP())
console.log(ship3.isSunk())
 */

//MOVE THIS TO UI MODULE
/* const rotateBtn = document.querySelector('[data-rotate-btn]');
const shipContainer = document.querySelector('[data-ship-container]');
let angle = 0;

function rotate() {
  const ships = Array.from(shipContainer.children);
  angle = angle === 0 ? 90 : 0;
  ships.forEach((ship) => (ship.style.transform = `rotate(${angle}deg)`));
  console.log(playerBoard.getOrientation());
}

rotateBtn.addEventListener('click', rotate); */
