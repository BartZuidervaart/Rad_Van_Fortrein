import { Speler } from '../Speler/speler';
import { Game } from '../Game/game';


export class Inzet {
    constructor(
        private _id: number, 
        private _speler: Speler, 
        private _game: Game, 
        private _inzetBedrag: number, 
        private _inzetTeLaat: boolean,
        private _teWinnenBedrag: number) {
    };

    get id () : number {return this._id}
    get speler() : Speler {return this._speler}
    get game() : Game {return this._game}
    get inzetBedrag() : number {return this._inzetBedrag}
    get inzetTeLaat() : boolean{return this._inzetTeLaat}
    get teWinnenBedrag() : number{return this._teWinnenBedrag}
}
