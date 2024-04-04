import './style.css'
import { createShip } from './ship'; 

const myShip = createShip(6)

myShip.getShipHP();
console.log(myShip.getShipHP())