import { Inzet } from '../Inzet/inzet';
import { Speler } from '../Speler/speler';

export class InzetSpelerHolder {

    constructor(
        private inzet : Inzet,
        private speler : Speler
    ) {}
}
