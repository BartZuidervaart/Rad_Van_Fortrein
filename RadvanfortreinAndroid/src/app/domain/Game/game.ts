import { Trein } from '../Trein/trein';
import { Station } from '../Station/station';
import { Inzet } from '../Inzet/inzet';

export class Game {
    constructor(
        private id: number,
        private trein: string,
        private station: string,
        private inzetten: number[],
        private resultaat: number,
    ){
    };

    get getId() : number {return this.id}
    get getTrein() : string {return this.trein}
    get getStation() : string {return this.station}
    get getInzetten() : number[] {return this.inzetten}
    get getResultaat() : number {return this.resultaat}
}