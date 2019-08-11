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
  spelerInzetten : Inzet[];
  resultaat: boolean;
  clicked: boolean[] = [false];
  trein: Trein;
  treinNaam: string;
  treinOrigin: string;
  geplandeAankomstTijd: string;
  werkelijkeAankomstTijd: string;

  constructor(
    private treinService: TreinService,
    private spelerService: SpelerService,
    private router: Router
  ) { }

  ngOnInit() {
    this.spelerService.retrieveById(this.spelerId).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        this.totaalPunten = speler.totaalPunten;
        this.inzettenArray = speler.inzetten;
        console.log(JSON.stringify(this.speler));
        console.log(JSON.stringify(this.totaalPunten));
        console.log(JSON.stringify(this.inzettenArray));
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
      }
    )
  }

  GetTrein(){
    this.treinService.retrieveByNaam(this.treinNaam).subscribe(
      (trein : Trein) => {
        this.trein = trein;
        this.treinOrigin = trein.origin;
        this.geplandeAankomstTijd = trein.geplandeAankomsten[0].substring(11,16);
        this.werkelijkeAankomstTijd = trein.werkelijkeAankomsten[0].substring(11,16);
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        console.log(JSON.stringify(this.trein));
      }
    )
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
}
