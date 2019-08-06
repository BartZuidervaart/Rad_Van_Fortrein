export class Trein {

    constructor(
        private naam: string,
        private origin: string,
        private geplandeAankomsten: string[],
        private werkelijkeAankomsten: string[]
    ) {}

    get getNaam() : string {
        return this.naam;
    }

    get getOrigin() : string {
        return this.origin;
    }

    get getGeplandeAankomsten() : string[] {
        return this.geplandeAankomsten;
    }

    get getWerkelijkeAankomsten() : string[] {
        return this.werkelijkeAankomsten;
    }
}
