import { Component, OnInit } from '@angular/core';
import { Inzet } from '../domain/Inzet/inzet';
import { InzetService } from '../services/inzet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpelerService } from '../services/speler.service';
import { Speler } from '../domain/Speler/speler';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent implements OnInit {

  inzetten: Inzet[];
  spelers: Speler[];
  speler: Speler;
  spelerId = 3;
  inzettenArray: Inzet[];
  totaalPunten: number;
  indexTijd : number = 0;
  spelerInzetten : number[];

  constructor(
    private inzetService: InzetService,
    private spelerService: SpelerService,
  ) { }

  ngOnInit() {
    this.inzetService.retrieveAll().subscribe(
      (inzetten: Inzet[]) => {
        this.inzetten = inzetten
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => { }
    )

    this.spelerService.retrieveById(this.spelerId).subscribe(
      (speler: Speler) => {
        this.speler = speler;
        this.spelerInzetten = speler.getInzetten;
        console.log(JSON.stringify(this.speler.getInzetten));
        this.totaalPunten = speler.getTotaalPunten;
        for (let inzetId of this.spelerInzetten) {
          for (let inzet of this.inzetten) {
            if (inzetId === inzet.getId) {
              this.inzettenArray.push(inzet);
            }
          }
        }
        
      },

      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => { }
    )
  }

  getInzetten() {
    return this.inzetten;
  }

  // getSpelers(){
  //   return this.spelers;
  // }

  getSpeler() {
    return this.speler;
  }

}
