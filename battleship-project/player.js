export function createPlayer(){
    const humanHistory = new Set();
    const computerHistory = new Set();

    function humanPlay(gameboard, row, col) {
        if(humanHistory.has(`${row}, ${col}`)) {
            return false;
        }

        const result = gameboard.receiveAttack(row, col);
        humanHistory.add(`${row},${col}`);

        return result;
    }

    function computerPlay(gameboard) {
        let row,
            col;
        
        do{
            row = Math.floor(Math.random() * 10);
            col = Math.floor(Math.random() * 10);
        }while (computerHistory.has(`${row},${col}`))
        
        const result = gameboard.receiveAttack(row, col);
        computerHistory.add(`${row},${col}`);

        return result;
    }

    return {
        humanPlay,
        computerPlay
    };
}