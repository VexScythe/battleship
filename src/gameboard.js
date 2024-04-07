import { createShip } from './ship';

export function createGameboard() {
  const boardSize = 10;
  const board = Array(boardSize)
    .fill(null)
    .map(() => Array(boardSize).fill(null));

  function isValid(ship, row, col, orientation) {
    if (orientation === 'horizontal') {
      return col + ship.getShipHP() <= boardSize;
    } else if (orientation === 'vertical') {
      return row + ship.getShipHP() <= boardSize;
    }
    return false;
  }

  function isTaken(row, col, ship, orientation) {
    for (let i = 0; i < ship.getShipHP(); i++) {
      if (orientation === 'horizontal') {
        if (board[row][col + i]) {
          return true;
        }
      } else if (orientation === 'vertical') {
        if (board[row + i][col]) {
          return true;
        }
      }
    }
    return false;
  }

  function placeShip(ship, row, col, orientation) {
    if (!isValid(ship, row, col, orientation) || isTaken(row, col, ship, orientation)) {
      return false;
    }
    if (orientation === 'horizontal') {
      for (let i = 0; i < ship.getShipHP(); i++) {
        board[row][col + i] = ship;
      }
    } else if (orientation === 'vertical') {
      for (let i = 0; i < ship.getShipHP(); i++) {
        board[row + i][col] = ship;
      }
    }
    return true;
  }

  function isHitted(cell) {
    return cell === 'X' || cell === 'O';
  }

  function receiveAttack(row, col) {
    const target = board[row][col];

    if (isHitted(target)) {
      return false;
    }

    if (target === null) {
      board[row][col] = 'O';
      return false;
    } else {
      target.hit();
      if (target.isSunk()) {
        console.log('nave affondata');
      }
      board[row][col] = 'X';
      return true;
    }
  }

  function allSunk() {
    for (let row = 0; row < boardSize; row++) {
      for (let col = 0; col < boardSize; col++) {
        const target = board[row][col];
        if (target !== null && !target.isSunk()) {
          return false;
        }
      }
    }
    return true;
  }

  return {
    board,
    placeShip,
    receiveAttack,
    allSunk,
  };
}
