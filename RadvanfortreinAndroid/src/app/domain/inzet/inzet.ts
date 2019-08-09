import { Speler } from '../Speler/speler';
import { Game } from '../Game/game';


export class Inzet {
    constructor(
        public id: number, 
        public speler: Speler, 
        public game: Game, 
        public inzetBedrag: number, 
        public inzetTeLaat: boolean,
        public teWinnenBedrag : number) {
    };

    // get getId () : number {return this.id}
    // get getSpeler() : Speler {return this.speler}
    // get getGame() : Game {return this.game}
    // get getInzetBedrag() : number {return this.inzetBedrag}
    // get getInzetTeLaat() : boolean{return this.inzetTeLaat}
    // get getTeWinnenBedrag() : number{return this.teWinnenBedrag}
}
