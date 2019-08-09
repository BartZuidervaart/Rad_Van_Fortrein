export class Station {

    constructor(
        public code : string,
        public naam : string,
        public treinen : string[]
    ) {}

    get getCode() { return this.code }
    get getNaam() { return this.naam }
    get getTreinen() { return this.treinen }
   
}