import { Trein } from '../Trein/trein';

export class Station {

    constructor(
        private _naam : string,
        private _code : string,
        private _treinen : Trein[]
    ) {}

    get naam() : string {
        return this._naam;
    }

    get code() : string {
        return this._code;
    }

    get treinen() : Trein[] {
        return this._treinen;
    }
}
