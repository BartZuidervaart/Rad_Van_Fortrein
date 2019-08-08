import { Inzet } from '../Inzet/inzet';

export class Speler {

    constructor(
        public id: number,
        public naam: string,
        public totaalPunten: number,
        // public _inzetten: Array<Inzet>,
        public inzetten: number[],
    ){};

    get getId() : number { return this.id}
    get getNaam() : string { return this.naam}
    get getTotaalPunten() : number { return this.totaalPunten}
    get getInzetten() { return this.inzetten}
}