import { Component, OnInit } from '@angular/core';
import { Inzet } from '../domain/Inzet/inzet';
import { InzetService } from '../services/inzet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpelerService } from '../services/speler.service';
import { Speler } from '../domain/Speler/speler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent implements OnInit {
  inzetten: Inzet[];
  spelers: Speler[];
  speler: Speler;
  spelerId = 87;
  inzettenArray: Inzet[];
  totaalPunten: number;
  spelerInzetten : Inzet[];
  resultaat: boolean;
  clicked: boolean[] = [false];

  constructor(
    private inzetService: InzetService,
    private spelerService: SpelerService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.inzetService.retrieveAllBySpelerId(this.spelerId).subscribe(
    //   (inzetten: Inzet[]) => {
    //     this.inzetten = inzetten
    //   },
    //   (error = HttpErrorResponse) => {
    //     console.log(error);
    //   },
    //   () => { }
    // )

    this.spelerService.retrieveById(this.spelerId).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        // this.spelerInzetten = speler.getInzetten;
        // console.log(JSON.stringify(this.speler.getInzetten));
        // this.totaalPunten = speler.getTotaalPunten;
        // for (let inzetId of this.spelerInzetten) {
        //   for (let inzet of this.inzetten) {
        //     if (inzetId === inzet.getId) {
        //       this.inzettenArray.push(inzet);
        //     }
        //   }
        // }
        this.inzettenArray = speler.inzetten;
      },

      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
      }
    )
  }
  ResultaatClick(inzet, index) {
    this.resultaat = inzet.inzetTeLaat == inzet.game.trein.teLaat;
    if (this.resultaat) {
      if (!this.clicked[index]) {
        this.UpdatePunten(inzet, index)
        this.clicked[index] = true;
      } else{}
    }
    else { }
  }

  UpdatePunten(inzet, index) {
    this.spelerService.updatePunten(this.speler.getId, this.inzettenArray[(index)].getTeWinnenBedrag).subscribe(
      (speler: Speler) => this.speler = speler,
      (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
          fout.error.error.status + " " + fout.error.error + "\n" +
          "\nMessage:\n" + fout.error.message
        ),
      () => {
        //this.router.navigate(['redirect', 'resultaat'])
        console.log(JSON.stringify(this.speler.getTotaalPunten));
        this.reloadPunten();
      }
    )
    
  }

  reloadPunten(){
    this.totaalPunten = this.speler.getTotaalPunten;
  }

  getInzetten() {
    return this.inzetten;
  }

  getSpeler() {
    return this.speler;
  }
}
