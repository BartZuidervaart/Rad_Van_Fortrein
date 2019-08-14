import { Component, OnInit, Input } from '@angular/core';
import { Inzet } from '../domain/Inzet/inzet';
import { HttpErrorResponse } from '@angular/common/http';
import { SpelerService } from '../services/speler.service';
import { Speler } from '../domain/Speler/speler';
import { Router } from '@angular/router';
import { TreinService } from '../services/trein.service';
import { Trein } from '../domain/Trein/trein';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent implements OnInit {
  @Input("inzet") inzet: Inzet;

  inzetten: Inzet[];
  spelers: Speler[];
  speler: Speler;
  spelerId = 998;
  inzettenArray: Inzet[];
  totaalPunten: number;
  spelerInzetten: Inzet[];
  resultaat: number = 0;
  clicked: boolean[] = [false];
  trein: Trein;
  treinNaam: string;
  treinDirection: string;
  treinDirections: Array<string> = [];
  geplandeAankomstTijd: string;
  geplandeAankomsten: string[] =[];
  werkelijkeAankomstTijd: string;

  constructor(
    private treinService: TreinService,
    private spelerService: SpelerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.GetSpeler();
  }

  GetSpeler() {
    this.spelerService.retrieveById(this.spelerId).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        this.totaalPunten = speler.totaalPunten;
        this.inzettenArray = speler.inzetten;
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
      }
    )
  }

  GetTrein(naam: string) {
    this.treinService.retrieveByNaam(naam).subscribe(
      (trein: Trein) => {
        this.trein = trein;
        this.treinDirection = trein.direction;
        this.geplandeAankomstTijd = trein.geplandeAankomsten[0].substring(11, 16);
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        this.treinDirections.push(this.treinDirection);
        this.geplandeAankomsten.push
      }
    )
  }

  resultaatChange(resultaat: number) {
    this.resultaat = resultaat;
    console.log("Resultaat: " + JSON.stringify(this.resultaat));
  } 

  getInzetten() {
    return this.inzetten;
  }

  onNotifyEvent(trein: Trein) {
      this.trein = trein;
      this.treinDirections.push(trein.direction);
      this.geplandeAankomsten.push(trein.geplandeAankomsten[0].substring(11,16));
      console.log("Trein in resultaat is ontvangen");
  }
}
