export class Trein {

    constructor(
        public naam: string,
        public direction: string,
        public geplandeAankomsten: string[],
        public werkelijkeAankomsten: string[],
        public teLaat: boolean,
    ) {}

    get getNaam() : string {
        return this.naam;
    }

    get getDirection() : string {
        return this.direction;
    }

    get getGeplandeAankomsten() {
        return this.geplandeAankomsten;
    }

    get getWerkelijkeAankomsten() {
        return this.werkelijkeAankomsten;
    }
}
