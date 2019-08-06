import { Trein } from '../Trein/trein';

export class Station {

    constructor(
        private naam : string,
        private code : string,
        private treinen : Trein[]
    ) {}

    get getNaam() : string {
        return this.naam;
    }

    set getNaam(naam: string) {
        this.naam = naam;
    }

    get getCode() : string {
        return this.code;
    }

    set getCode(code : string) {
        this.code = code;
    }

    get getTreinen() : Trein[] {
        return this.treinen;
    }

    set getTreinen(treinen : Trein[]) {
        this.treinen = treinen;
    }
}
