import { Trein } from '../Trein/trein';
import { Station } from '../Station/station';
import { Inzet } from '../Inzet/inzet';

export class Game {

    constructor(
        private id:number,
        private trein: Trein,
        private station: Station,
        private inzetten : Inzet[]
    ) {}

    get getId() : number {
        return this.id;
    }

    get getTrein() : Trein {
        return this.trein;
    }

    get getStation() : Station {
        return this.station;
    }

    get getInzetten() : Inzet[] {
        return this.inzetten;
    }
}
