export class Station {

    constructor(
        private code : string,
        private naam : string,
        private treinen : string[]
    ) {}

    get getCode() { return this.code }
    get getNaam() { return this.naam }
    get getTreinen() { return this.treinen }
   
}