import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TabelComponent } from './tabel/tabel.component';
import { Station } from '../domain/Station/station';
import { Trein } from '../domain/Trein/trein';
import { StationService } from '../services/station.service';
import { GameService } from '../services/game.service';
import { InzetService } from '../services/inzet.service';
import { SpelerService } from '../services/speler.service';
import { Game } from '../domain/Game/game';
import { Inzet } from '../domain/Inzet/inzet';
import { Speler } from '../domain/Speler/speler';
import { HttpErrorResponse } from '@angular/common/http';
import { InzetSpelerHolder } from '../domain/InzetSpelerHolder/inzet-speler-holder';

// export interface Trein {
//   naam: string;
//   beginStation: string;
//   station: string;
//   tijd: string;
// }

export interface Keuze {
  value: string;
  viewValue: string;
  booleanValue: boolean;
}

@Component({
  selector: 'app-inzet',
  templateUrl: './inzet.component.html',
  styleUrls: ['./inzet.component.css']
})
export class InzetComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  aantalPunten = 0;
  selectedTrein: Trein;
  keuzeTeLaat: string;
  treinen: Trein[];
  station: Station;
  game: Game;
  inzet: Inzet;
  speler: Speler;
  keuze : boolean;
  time : string;

  // treinen:  Trein[] = [
  //   {naam: 'ns 2273', beginStation: 'Vlissingen', station: 'Amsterdam', tijd: '12:07'},
  //   {naam: 'ns 4066', beginStation: 'Rotterdam Centraal', station: 'Amsterdam', tijd: '12:13'},
  //   {naam: 'ns 14668', beginStation: 'Zwolle', station: 'Amsterdam', tijd: '12:19'}
  // ];

  keuzes: Keuze[] = [
    { value: 'op tijd is', viewValue: 'Op tijd', booleanValue: false },
    { value: 'te laat komt', viewValue: 'Te laat', booleanValue: true }
  ];

  constructor(
    private stationService: StationService,
    private gameService: GameService,
    private inzetService: InzetService,
    private spelerService: SpelerService
  ) { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      selectedTrein: new FormControl()
    });
    this.secondFormGroup = new FormGroup({
      keuzeTeLaat: new FormControl()
    });
    this.thirdFormGroup = new FormGroup({
      aantalPunten: new FormControl()
    });
    this.treinen = [];
  }

  submit() {
    console.log(this.selectedTrein, this.keuzeTeLaat, this.aantalPunten);
    //Hier moet de inzet worden verstuurd!
    //En je gaat weer terug naar de home pagina
    this.treinen.push(this.selectedTrein);
    // create Station object
    this.station = new Station("Amsterdam Centraal", "ASD",[]);
    // create Game object
    this.game = new Game(0, this.selectedTrein, this.station, new Array<Inzet>());
    // create Speler object
    this.speler = new Speler(0, "Barry", 500, []);
    // create Inzet object
    this.inzet = new Inzet(0, this.speler, this.game, this.aantalPunten, false);
    // update Game object
    // this.game.getInzetten.push(this.inzet);
    // update Speler object
    // this.speler.getInzetten.push(this.inzet);

    //@TODO alles naar de DB
    console.log(this.station);
    this.stationService.create(this.station).subscribe(
      data => {
        console.log("POST station request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }
    );
    this.spelerService.create(this.speler).subscribe (
      data => {
        console.log("POST speler request is succesful ", data);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.gameService.create(this.game).subscribe (
          (game : Game) => {
            this.game = game;
            console.log("POST game request is succesful ", this.game);
          },
          error => {
            console.log("Error", error);
          },
          () => {
            this.inzetService.create(new InzetSpelerHolder(this.inzet, this.speler), 0).subscribe (
              data => {
                console.log("POST inzet request is succesful ", data);
              },
              error => {
                console.log("Error", error);
              }
            );
          }
        );
      }
    );
  }

  onSelectionChanged(trein: Trein): void {
    this.selectedTrein = trein;
    console.log(this.selectedTrein);
  }

}
