export class Trein {

    constructor(
        private _naam: string,
        private _origin: string,
        private _geplandeAankomsten: Array<string>,
        private _werkelijkeAankomsten: Array<string>
    ) {}

    get naam() : string {
        return this._naam;
    }

    get origin() : string {
        return this._origin;
    }

    get geplandeAankomsten() {
        return this._geplandeAankomsten;
    }

    get werkelijkeAankomsten() {
        return this._werkelijkeAankomsten;
    }
}
