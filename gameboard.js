import { createShip } from "./ship";

export function createGameboard() {
    const boardSize = 10;
    const board = Array(boardSize).fill(null).map(() => Array(boardSize).fill(null));

    function placeShip(ship, row, col, horizontal){
        const shipLenght = ship.getShipHP();
        const endRow = horizontal ? row : row + shipLenght -1;
        const endCol = horizontal ? col + shipLenght - 1 : col;

        if (endRow >= boardSize || endCol >= boardSize) {
            return false;
        }

        for (let i = row; i <= endRow; i++) {
            for (let j = col; j <= endCol; j++) {
                if (board[i][j] !== null) {
                    return false;
                }
            }
        }

        for (let i = row; i <= endRow; i++) {
            for (let j = col; j <= endCol; j++) {
                board[i][j] = ship;
            }
        }

        return true;
    }

    function receiveAttack(row, col){
        const target = board[row][col];

        if (board[row][col] === 'X' || board[row][col] === 'O') {
            return false;
        }    

        if( target === null ){
            board[row][col] = 'O';
            return false
        } else {
            target.hit();
            if ( target.isSunk() ) {
                console.log('nave affondata')
            }
            board[row][col] = 'X';
            return true;
        }
    }

    function allSunk(){
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

    return{
        board,
        placeShip,
        receiveAttack,
        allSunk
    }
}