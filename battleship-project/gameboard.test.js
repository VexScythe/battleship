import { createGameboard } from './gameboard';
import { createShip } from './ship';

test('placeShip posiziona correttamente una nave', () => {
    const board = createGameboard();
    const ship = createShip(3);

    expect(board.placeShip(ship, 0, 0, true)).toBe(true);
    expect(board.board[0][0]).toBe(ship);
    expect(board.board[0][1]).toBe(ship);
    expect(board.board[0][2]).toBe(ship);
});

test('receiveAttack registra correttamente un attacco', () => {
    const board = createGameboard();
    const ship = createShip(3);
    board.placeShip(ship, 0, 0, true);

    expect(board.receiveAttack(0, 0)).toBe(true);
    expect(board.board[0][0]).toBe('X');

    expect(board.receiveAttack(1, 1)).toBe(false);
    expect(board.board[1][1]).toBe('O');
});

test('allSunk restituisce true se tutte le navi sono affondate', () => {
    const board = createGameboard();
    const ship1 = createShip(3);
    const ship2 = createShip(2);

    board.placeShip(ship1, 0, 0, true);
    board.placeShip(ship2, 1, 0, false);

    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 2);
    board.receiveAttack(1, 0);
    board.receiveAttack(2, 0);

    expect(board.allSunk()).toBe(true);
});

test('allSunk restituisce false se non tutte le navi sono affondate', () => {
    const board = createGameboard();
    const ship1 = createShip(3);
    const ship2 = createShip(2);

    board.placeShip(ship1, 0, 0, true);
    board.placeShip(ship2, 1, 0, false);

    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(1, 0);

    expect(board.allSunk()).toBe(false);
});