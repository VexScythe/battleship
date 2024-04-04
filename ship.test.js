import { createShip } from "./ship";


describe('createShip', () => {
    let myShip;

    beforeEach(() => {
        myShip = createShip(3);
    });

    it('should return correct initial ship hitpoint', () => {
        expect(myShip.getShipHP()).toBe(3);
    });

    it('should hit the ship correctly', () => {
        myShip.hit();
        expect(myShip.getShipHP()).toBe(2);
    });

    it('should not reduce hitpoints below zero', () => {
        myShip.hit();
        myShip.hit();
        myShip.hit();
        expect(myShip.getShipHP()).toBe(0);
        myShip.hit();
        expect(myShip.getShipHP()).toBe(0);
    });

    it('should correctly determine if the ship is sunk', () => {
        expect(myShip.isSunk()).toBe(false);
        myShip.hit();
        myShip.hit();
        myShip.hit();
        expect(myShip.isSunk()).toBe(true);
    });

    it('should not sink the ship when hitpoints are above zero', () => {
        myShip.hit();
        expect(myShip.isSunk()).toBe(false);
    });
});