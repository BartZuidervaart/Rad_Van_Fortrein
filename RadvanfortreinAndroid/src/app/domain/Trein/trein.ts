export class Trein {

    constructor(
        public naam: string,
        public origin: string,
        public geplandeAankomsten: string[],
        public werkelijkeAankomsten: string[],
    ) {}

    get getNaam() : string {
        return this.naam;
    }

    get getOrigin() : string {
        return this.origin;
    }

    get getGeplandeAankomsten() {
        return this.geplandeAankomsten;
    }

    get getWerkelijkeAankomsten() {
        return this.werkelijkeAankomsten;
    }
}
