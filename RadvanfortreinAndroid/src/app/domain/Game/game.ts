import { Trein } from '../Trein/trein';
import { Station } from '../Station/station';
import { Inzet } from '../Inzet/inzet';

export class Game {
    constructor(
        private _id: number,
        private _trein: Trein,
        private _station: Station,
        private _inzetten: Array<Inzet>,
        private _resultaat: number,
    ){
    };

    get id() : number {return this._id}
    get trein() : Trein {return this._trein}
    get station() : Station {return this._station}
    get inzetten() {return this._inzetten}
    get resultaat() : number {return this._resultaat}
}