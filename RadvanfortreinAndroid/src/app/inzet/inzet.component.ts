import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
import { HttpErrorResponse } from '@angular/common/http';

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
  treinen: string[];
  treinNaam: string;
  station: Station;
  game: Game;
  speler: Speler;
  inzet: Inzet;
  teWinnenPunten: number = 0;

  keuzes: Keuze[] = [
    { value: false, viewValue: 'Op tijd' },
    { value: true, viewValue: 'Te laat' }
  ];

  constructor(
    private stationService: StationService,
    private gameService: GameService,
    private inzetService: InzetService,
    private spelerService: SpelerService,
    private router: Router
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
    this.treinen.push(this.selectedTrein.naam);
    // this.station = new Station("ASD", "Amsterdam Centraal", this.treinen);
    // this.game = new Game(1, this.selectedTrein.naam, this.station.code, new Array<Inzet>(), 0);
    // this.speler = new Speler(1, "Barry", 500, new Array<Inzet>());
    this.getStation();
  }

  getStation() {
    this.stationService.retrieveByNaam("ASD").subscribe(
      (station: Station) => {
        this.station = station
        console.log("GET station request is succesful ", station);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.getSpeler();
      }
    )
  }

  updateStation() {
    this.stationService.create(this.station).subscribe(
      (station: Station) => {
        this.station = station
        console.log("PUT station request is succesful ", station);
      },
      error => {
        console.log("Error", error);
      },
      () => {
       this.updateSpeler();
      }
    )
  }

  getSpeler() {
    this.spelerService.retrieveById(998).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        console.log("GET speler request is succesful ", speler);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.getGame();
      }
    )
  }

  updateSpeler() {
    this.spelerService.update(this.speler).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        console.log("PUT speler request is succesful ", speler);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.updateGame();
      }
    )
  }

  getGame() {
    this.gameService.retrieveById(999).subscribe(
      (game: Game) => {
        this.game = game;
        console.log("GET game request is succesful ", game);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.inzet = new Inzet(0, this.speler, this.game, this.aantalPunten, this.keuzeTeLaat, this.teWinnenPunten);
        console.log(this.inzet);
        this.createInzet();
      }
    )
  }

  updateGame() {
    this.gameService.update(this.game).subscribe(
      (game: Game) => {
        this.game = game;
        console.log("PUT game request is succesful ", game);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.gaNaarHome();
      }
    )
  }

  createInzet() {
    this.inzetService.create(this.inzet).subscribe(
      (inzet: Inzet) => {
        this.inzet = inzet;
        console.log("POST inzet request is succesful ", inzet);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.game.inzetten.push(this.inzet);
        this.speler.inzetten.push(this.inzet);
        this.updateStation();
        //this.gaNaarHome();
      }
    )
  }

  updateInzet() {
    this.inzet.speler = this.speler;
    this.inzet.game = this.game;
    this.inzetService.update(this.inzet).subscribe(
      (inzet: Inzet) => this.inzet = inzet,
      (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
          fout.error.error.status + " " + fout.error.error + "\n" +
          "\nMessage:\n" + fout.error.message
        ),
      () => {

      }

    )
  }

  onSelectionChanged(trein: Trein): void {
    this.selectedTrein = trein;
    console.log(this.selectedTrein);
  }

  gaNaarHome(): void {
    this.router.navigate(['home']);
  }

}
