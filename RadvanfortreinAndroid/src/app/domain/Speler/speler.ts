import { Inzet } from '../Inzet/inzet';

export class Speler {

    constructor(
        private _id: number,
        private _naam: string,
        private _totaalPunten: number,
        private _inzetten: Array<Inzet>,
    ){};

    get id() : number { return this._id}
    get naam() : string { return this._naam}
    get totaalPunten() : number { return this._totaalPunten}
    get inzetten() { return this._inzetten}
}