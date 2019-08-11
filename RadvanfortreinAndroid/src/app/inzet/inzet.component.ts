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
  spelerId: number = 998;

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
    this.getSpeler();
  }

  // might get deleted
  // getStation() {
  //   this.stationService.retrieveByNaam("ASD").subscribe(
  //     (station: Station) => {
  //       this.station = station
  //       console.log("GET station request is succesful ", station);
  //     },
  //     error => {
  //       console.log("Error", error);
  //     },
  //     () => {
  //       this.station.treinen = this.treinen;
  //       this.getSpeler();
  //     }
  //   )
  // }

  getSpeler() {
    this.spelerService.retrieveById(this.spelerId).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        console.log("GET speler request is succesful ", speler);
      },
      error => {
        if (error.status === 404) {
          console.log("speler not found");
          this.speler = new Speler(this.spelerId, "Robert", 500, new Array<Inzet>()); //verander spelerId naar 0 als we meerdere spelers hebben.
          this.createSpeler();
        }
      },
      () => {
        this.getGame();
      }
    )
  }

  getGame() {
    this.gameService.retrieveByTrein(this.selectedTrein).subscribe(
      (game: Game) => {
        this.game = game;
      },
      error => {
        if (error.status === 404) {
          this.createGame();
        }
      },
      () => {
        if(this.checkSpelerGame()) {
          alert("Je hebt al ingezet op deze trein, kies een andere trein en zet daar op in");
        } else {
          this.createInzet();
        }
      }
    )
  }

  createGame() {
    this.game = new Game(0, this.selectedTrein.naam, "ASD", new Array<Inzet>(), 0);
    this.gameService.create(this.game).subscribe(
      (game: Game) => {
        this.game = game;
        console.log("POST game request is succesful ", game);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.createInzet();
      }
    )
  }

  createInzet() {
    this.inzet = new Inzet(0, this.speler, this.game, this.aantalPunten, this.keuzeTeLaat, this.aantalPunten * 2);
    this.inzetService.create(this.inzet).subscribe(
      (inzet: Inzet) => {
        this.inzet = inzet;
        console.log("POST inzet request is succesful ", inzet);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.gaNaarHome();
      }
    )
  }

  createSpeler() {
    this.spelerService.create(this.speler).subscribe (
      (speler: Speler) => {
        this.speler = speler;
        console.log("POST speler request is succesful ", speler);
      },
      error => {
        console.log("Error", error);
      },
      () => {
        this.getGame();
      }
    )
  }

  //returns true als Speler een Inzet in die Game heeft
  checkSpelerGame() : boolean{
    for (let inzet of this.speler.inzetten) {
      if (this.game.id === inzet.game.id) {
        return true;
      }
    }
    return false;
  }

  onSelectionChanged(trein: Trein): void {
    this.selectedTrein = trein;
    console.log(this.selectedTrein);
  }

  gaNaarHome(): void {
    this.router.navigate(['home']);
  }

}
