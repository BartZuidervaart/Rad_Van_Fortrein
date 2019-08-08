import { Speler } from '../Speler/speler';
import { Game } from '../Game/game';


export class Inzet {
    constructor(
        private id: number, 
        private speler: number, 
        private game: Game, 
        private inzetBedrag: number, 
        private inzetTeLaat: boolean,
        private teWinnenBedrag : number) {
    };

    get getId () : number {return this.id}
    get getSpeler() : number {return this.speler}
    get getGame() : Game {return this.game}
    get getInzetBedrag() : number {return this.inzetBedrag}
    get getInzetTeLaat() : boolean{return this.inzetTeLaat}
    get getTeWinnenBedrag() : number{return this.teWinnenBedrag}
}
