import './style.css';
import { createShip } from './ship';
import { createGameboard } from './gameboard';
import { createPlayer } from './player';

const player = createPlayer();

const ship = createShip(6);
const ship2 = createShip(3);
const ship3 = createShip(2);

const playerBoard = createGameboard();
const computerBoard = createGameboard();

playerBoard.placeShip(ship, 0, 0);
playerBoard.placeShip(ship2, 1, 0);
console.log(playerBoard);
console.log(playerBoard.board);

computerBoard.placeShipAi(ship, 0, 0);
computerBoard.placeShipAi(ship2, 1, 0);
console.log(computerBoard.board);

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
const rotateBtn = document.querySelector('[data-rotate-btn]');
const shipContainer = document.querySelector('[data-ship-container]');
let angle = 0;

function rotate() {
  const ships = Array.from(shipContainer.children);
  angle = angle === 0 ? 90 : 0;
  ships.forEach((ship) => (ship.style.transform = `rotate(${angle}deg)`));
  console.log(playerBoard.getOrientation());
}

rotateBtn.addEventListener('click', rotate);
