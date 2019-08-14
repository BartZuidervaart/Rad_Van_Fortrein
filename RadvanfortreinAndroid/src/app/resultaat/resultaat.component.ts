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
  resultaat: number;
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
        // for(let inzet of this.inzettenArray){
        //   this.GetTrein(inzet.game.trein);
        // }
        // console.log(this.inzettenArray)
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

  ResultaatChange(inzet) {
    this.resultaat = inzet.game.resultaat;
  } 

  // ResultaatClick(inzet, index) {
  //   this.resultaat = inzet.inzetTeLaat == inzet.game.trein.teLaat;
  //   if (this.resultaat) {
  //     if (!this.clicked[index]) {
  //       //this.UpdatePunten(inzet, index)
  //       this.clicked[index] = true;
  //     } else{}
  //   }
  //   else { }
  // }

  // UpdatePunten(inzet, index) {
  //   this.spelerService.updatePunten(this.speler.id, this.inzettenArray[(index)].teWinnenBedrag).subscribe(
  //     (speler: Speler) => this.speler = speler,
  //     (fout: HttpErrorResponse) =>
  //       alert("Er is een fout opgetreden: " +
  //         fout.error.error.status + " " + fout.error.error + "\n" +
  //         "\nMessage:\n" + fout.error.message
  //       ),
  //     () => {
  //       //this.router.navigate(['redirect', 'resultaat'])
  //       console.log(JSON.stringify(this.speler.getTotaalPunten));
  //       this.reloadPunten();
  //     }
  //   )

  // }

  // reloadPunten(){
  //   this.totaalPunten = this.speler.getTotaalPunten;
  // }

  getInzetten() {
    return this.inzetten;
  }

  getSpeler() {
    return this.speler;
  }

  onNotifyEvent(trein: Trein) {
      this.trein = trein;
      this.treinDirections.push(trein.direction);
      this.geplandeAankomsten.push(trein.geplandeAankomsten[0].substring(11,16));
      console.log("Trein in resultaat is ontvangen");
  }
}
