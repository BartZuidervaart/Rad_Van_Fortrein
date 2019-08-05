export class Trein {

    constructor(
        private _naam: string,
        private _origin: string,
        private _geplandeAankomsten: string[],
        private _werkelijkeAankomsten: string[]
    ) {}

    get naam() : string {
        return this._naam;
    }

    get origin() : string {
        return this._origin;
    }

    get geplandeAankomsten() : string[] {
        return this._geplandeAankomsten;
    }

    get werkelijkeAankomsten() : string[] {
        return this._werkelijkeAankomsten;
    }
}
