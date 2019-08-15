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
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';


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
  selectedTreinDirection: string;
  keuzeTeLaat: boolean = false;
  treinen: string[];
  treinNaam: string;
  station: Station;
  game: Game;
  speler: Speler;
  inzet: Inzet;
  teWinnenPunten: number = 0;
  spelerId: number = 998;
  totaalPunten: number;
  treinInfo: string = "Selecteer de trein waar je op wilt gokken.";
  keuzeInfo: string = "Kies of je denkt dat de geselecteerde trein op tijd komt of niet.";
  puntenInfo: string = "Er moet minstens 1 punten worden ingezet. Je kan niet meer inzetten dan je totaal aantal punten. Als je goed gokt verdubbel je je inzet. Als je fout gokt verlies je je inzet. ";

  keuzes: Keuze[] = [
    { value: false, viewValue: 'Op tijd' },
    { value: true, viewValue: 'Te laat' }
  ];

  constructor(
    private stationService: StationService,
    private gameService: GameService,
    private inzetService: InzetService,
    private spelerService: SpelerService,
    private router: Router,
    private dialog: MatDialog
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
    this.getSpeler(false);
  }

  submit() {
    if (this.selectedTrein == null) {
      this.openDialog("Er is geen trein geselecteerd. Selecteer een trein en probeer het nog eens.");
    } else {
      console.log(this.selectedTrein.naam, this.keuzeTeLaat, this.aantalPunten);
      this.treinen.push(this.selectedTrein.naam);
      this.getSpeler(true);
    }
  }

  getSpeler(inzet: boolean) {
    this.spelerService.retrieveById(this.spelerId).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        this.totaalPunten = speler.totaalPunten;
        console.log("GET speler request is succesful ", speler);
      },
      error => {
        if (error.status === 404) {
          console.log("speler not found");
          this.speler = new Speler(this.spelerId, "Robert", 500, new Array<Inzet>()); //verander spelerId naar 0 als we meerdere spelers hebben.
          this.createSpeler();
        } else if (error.status === 500) {
          this.openDialog("Er is iets misgegaan bij de server, probeer het opnieuw. \n Als het probleem zich blijft voordoen, neem dan contact op.");
        } else {
          console.log("Error", error);
        }
      },
      () => {
        if(inzet){
        this.getGame();}
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
        } else if (error.status === 500) {
          this.openDialog("Er is iets misgegaan bij de server, probeer het opnieuw. \n Als het probleem zich blijft voordoen, neem dan contact op.");
        } else {
          console.log("Error", error);
        }
      },
      () => {
        if(this.checkSpelerGame()) {
          this.openDialog("Je hebt al ingezet op deze trein, kies een andere trein en zet daar op in");
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
        if (error.status === 409) {
          this.openDialog("De game id bestaat al in de database, neem contact op.");
        } else if (error.status === 500) {
          this.openDialog("Er is iets misgegaan bij de server, probeer het opnieuw. \n Als het probleem zich blijft voordoen, neem dan contact op.");
        } else {
          console.log("Error", error);
        }
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
        if (error.status === 409) {
          this.openDialog("Het inzet id bestaat al, neem contact op");
        } else if (error.status === 400) {
          this.openDialog("De hoeveelheid punten die je hebt ingezet is niet geldig (teveel of te weinig punten ingezet)");
        } else if (error.status === 500) {
          this.openDialog("Er is iets misgegaan bij de server, probeer het opnieuw. \n Als het probleem zich blijft voordoen, neem dan contact op.");
        } else {
          console.log("Error", error);
        }
      },
      () => {
        this.gaNaarResultaat();
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
        if (error.status === 409) {
          this.openDialog("De speler id bestaat al, neem contact op.");
        } else if (error.status === 500) {
          this.openDialog("Er is iets misgegaan bij de server, probeer het opnieuw. \n Als het probleem zich blijft voordoen, neem dan contact op.");
        } else {
          console.log("Error", error);
        }
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
    this.selectedTreinDirection = this.selectedTrein.direction;
    console.log("Geselecteerde trein: " + this.selectedTrein.naam);
  }

  gaNaarResultaat(): void {
    this.router.navigate(['resultaat']);
  }

  openDialog(errorMessage : string) : void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: {message : errorMessage}
    });

    dialogRef.afterClosed().subscribe(result => {
     console.log("De error dialog is gesloten");
    })
  }

}
