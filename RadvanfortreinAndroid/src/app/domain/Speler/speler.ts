import { Inzet } from '../Inzet/inzet';

export class Speler {

    constructor(
        private id: number,
        private naam: string,
        private totaalPunten: number,
        // private _inzetten: Array<Inzet>,
        private inzetten: string[],
    ){};

    get getId() : number { return this.id}
    get getNaam() : string { return this.naam}
    get getTotaalPunten() : number { return this.totaalPunten}
    get getInzetten() { return this.inzetten}
}