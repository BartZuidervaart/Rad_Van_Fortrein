import { Component, OnInit } from '@angular/core';
import { Inzet } from '../domain/Inzet/inzet';
import { InzetService } from '../service/inzet.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SpelerService } from '../service/speler.service';
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


  constructor(
    private inzetService: InzetService,
    private spelerService: SpelerService,
  ) { }

  ngOnInit() {
    this.inzetService.retrieveAll().subscribe(
      (inzetten : Inzet[]) => {
        this.inzetten = inzetten},
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {}
    )
    this.spelerService.retrieveAll().subscribe(
      (spelers : Speler[]) => {
        this.spelers = spelers},
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {}
    )
  }

  getInzetten(){
    return this.inzetten;
  }
  
  getSpelers(){
    return this.spelers;
  }
  
  getSpeler(){
    return this.speler;
  }

}
