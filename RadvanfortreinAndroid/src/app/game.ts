import { Trein } from './trein';
import { Station } from './station';
import { Inzet } from './inzet';

export class Game {
    constructor(
        private _id: number,
        private _trein: Trein,
        private _station: Station,
        private _inzetten: Inzet[],
        private _resultaat: number,
    ){
    };

    get id() : number {return this._id}
    get trein() : Trein {return this._trein}
    get station() : Station {return this._station}
    get inzetten() : Inzet[] {return this._inzetten}
    get resultaat() : number {return this._resultaat}
}

// "id": 1,
// "trein": null,
// "station": null,
// "inzetten": [
//     {
//         "id": 11,
//         "speler": {
//             "id": 5,
//             "naam": "Kees",
//             "totaalPunten": 50
//         },
//         "inzetBedrag": 5,
//         "inzetTeLaat": false
//     },
//     {
//         "id": 7,
//         "speler": {
//             "id": 3,
//             "naam": "Frits",
//             "totaalPunten": 50
//         },
//         "inzetBedrag": 5,
//         "inzetTeLaat": false
//     },
//     {
//         "id": 13,
//         "speler": {
//             "id": 6,
//             "naam": "Jan",
//             "totaalPunten": 50
//         },
//         "inzetBedrag": 5,
//         "inzetTeLaat": true
//     },
//     {
//         "id": 9,
//         "speler": {
//             "id": 4,
//             "naam": "Piet",
//             "totaalPunten": 50
//         },
//         "inzetBedrag": 5,
//         "inzetTeLaat": true
//     }
// ],
// "resultaat": 0