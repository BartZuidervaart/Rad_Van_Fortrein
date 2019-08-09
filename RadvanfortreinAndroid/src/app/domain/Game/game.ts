import { Trein } from '../Trein/trein';
import { Station } from '../Station/station';
import { Inzet } from '../Inzet/inzet';

export class Game {
    constructor(
        public id: number,
        public trein: string,
        public station: string,
        public inzetten: Array<Inzet>,
        public resultaat: number,
    ){
    };

    get getId() : number {return this.id}
    get getTrein() : string {return this.trein}
    get getStation() : string {return this.station}
    get getInzetten() : Array<Inzet> {return this.inzetten}
    get getResultaat() : number {return this.resultaat}
}