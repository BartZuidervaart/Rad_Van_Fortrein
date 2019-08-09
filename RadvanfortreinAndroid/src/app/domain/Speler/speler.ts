import { Inzet } from '../Inzet/inzet';

export class Speler {

    constructor(
        public id: number,
        public naam: string,
        public totaalPunten: number,
        public inzetten: Array<Inzet>,
    ){};

    get getId() : number { return this.id}
    get getNaam() : string { return this.naam}
    get getTotaalPunten() : number { return this.totaalPunten}
    get getInzetten() : Array<Inzet> { return this.inzetten}
}