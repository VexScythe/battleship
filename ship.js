export function createShip(lenght) {
    let shipLenght = lenght,
        shipHitPoint = lenght,
        sunked = false;

    function getShipHP(){
        return shipHitPoint;
    }

    function hit(){
        if (shipHitPoint > 0) {
            shipHitPoint--;
        }
        return shipHitPoint;
    }

    function isSunk(){
        return sunked = shipHitPoint <= 0;
    }

    return {
        isSunk,
        hit,
        getShipHP
    }
}


/* module.exports = { createShip }
 */