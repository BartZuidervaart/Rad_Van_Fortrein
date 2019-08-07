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
  spelerId = 3;
  inzettenArray: Inzet[];
  totaalPunten: number; 
  resultaat: boolean;

  constructor(
    private inzetService: InzetService,
    private spelerService: SpelerService,
    private router: Router
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
        this.inzettenArray = speler.inzetten;
        console.log(JSON.stringify(this.speler.inzetten));
        this.totaalPunten = speler.totaalPunten;
        console.log(JSON.stringify(this.speler.totaalPunten));
      },

      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => { }
    )
  }

  UpdatePunten(inzet, index){
    this.resultaat = inzet.inzetTeLaat == inzet.game.trein.teLaat;
    if(this.resultaat){
    this.spelerService.updatePunten(this.speler.id, this.inzettenArray[(index)].teWinnenBedrag).subscribe(
      (speler: Speler) => this.speler = speler,
      (fout: HttpErrorResponse) =>
        alert("Er is een fout opgetreden: " +
        fout.error.error.status + " " + fout.error.error + "\n" + 
        "\nMessage:\n" + fout.error.message
        ),
        () => {
          //this.router.navigate(['redirect', 'resultaat'])
        }
    )}
    else{

    }
    console.log(JSON.stringify(this.speler.totaalPunten));
}

  getInzetten() {
    return this.inzetten;
  }

  getSpeler() {
    return this.speler;
  }

}
