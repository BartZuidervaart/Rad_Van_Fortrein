import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { TabelComponent } from './tabel/tabel.component';
import { Trein } from '../domain/Trein/trein';
import { InzetService } from '../services/inzet.service';
import { GameService } from '../services/game.service';
import { StationService } from '../services/station.service';
import { SpelerService } from '../services/speler.service';
import { Station } from '../domain/Station/station';
import { Game } from '../domain/Game/game';
import { Speler } from '../domain/Speler/speler';
import { Inzet } from '../domain/Inzet/inzet';
import { Router } from '@angular/router';

// export interface Trein {
//   naam: string;
//   beginStation: string;
//   station: string;
//   tijd: string;
// }

export interface Keuze {
  value: boolean;
  viewValue: string;
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
  keuzeTeLaat: boolean;
  treinen : string[];
  station : Station;
  game : Game;
  speler : Speler;
  inzet : Inzet;
  teWinnenPunten: number = 0;

  // treinen:  Trein[] = [
  //   {naam: 'ns 2273', beginStation: 'Vlissingen', station: 'Amsterdam', tijd: '12:07'},
  //   {naam: 'ns 4066', beginStation: 'Rotterdam Centraal', station: 'Amsterdam', tijd: '12:13'},
  //   {naam: 'ns 14668', beginStation: 'Zwolle', station: 'Amsterdam', tijd: '12:19'}
  // ];

  keuzes: Keuze[] = [
    {value: false, viewValue: 'Op tijd'},
    {value: true, viewValue: 'Te laat'}
  ];

  constructor(
    private stationService: StationService,
    private gameService: GameService,
    private inzetService: InzetService,
    private spelerService: SpelerService,
    private router : Router
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

  submit(){
    console.log(this.selectedTrein, this.keuzeTeLaat, this.aantalPunten);
    //Hier moet de inzet worden verstuurd!
    //En je gaat weer terug naar de home pagina
    this.treinen.push(this.selectedTrein.getNaam);
    this.station = new Station("ASD", "Amsterdam Centraal", this.treinen);
    this.game = new Game(0, this.selectedTrein.getNaam, this.station.getCode, new Array<number>(), 0);
    this.speler = new Speler(0, "Barry", 500, new Array<number>());
    this.inzet = new Inzet(0, this.speler.getId, this.game.getId, this.aantalPunten, this.keuzeTeLaat, this.teWinnenPunten );

    this.stationService.create(this.station).subscribe(
      data => {
        console.log("POST station request is succesful ", data);
      },
      error => {
        console.log("Error", error);
      }
    )
    this.spelerService.create(this.speler).subscribe(
      data => {
        console.log("POST speler request is succesful ", data);
      },
      error => {
        console.log("Error", error);
      }
    )
    this.gameService.create(this.game).subscribe(
      data => {
        console.log("POST game request is succesful ", data);
      },
      error => {
        console.log("Error", error);
      }  
    )

    this.inzetService.create(this.inzet).subscribe(
      data => {
        console.log("POST inzet request is succesful ", data);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.gaNaarHome();
      }
    )

  }

  onSelectionChanged(trein:Trein): void {
    this.selectedTrein = trein;
    console.log(this.selectedTrein);
  }

  gaNaarHome() : void {
    this.router.navigate(['home']);
  }

}
