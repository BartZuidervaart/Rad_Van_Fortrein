import { Component, OnInit, Input } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';
import { Trein } from '../../domain/Trein/trein';
import { TreinService } from '../../services/trein.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ResultaatComponent } from '../resultaat.component';
import { InzetService } from '../../services/inzet.service';

@Component({
  selector: 'app-resultaat-element-timer',
  templateUrl: './resultaat-element-timer.component.html',
  styleUrls: ['./resultaat-element-timer.component.css']
})
export class ResultaatElementTimerComponent implements OnInit {
  @Input("inzet") inzet: Inzet;
  @Input("trein") trein: Trein;

  treinNaam: string;
  treinOrigin: string;
  geplandeAankomstString: string;
  werkelijkeAankomstString: string;
  geplandeAankomstDate: Date;
  werkelijkeAankomstDate: Date;
  geplandeAankomstTijd: string;
  werkelijkeAankomstTijd: string;
  teLaat: boolean;
  timer;
  seconds: string;
  minutes: string;
  hours: string;
  time: string;

  constructor(
    private treinService : TreinService,
    private inzetService : InzetService,
    private router: Router,
    private resultaatComponent : ResultaatComponent,
  ) { }

  ngOnInit() {
    this.treinNaam = this.inzet.game.trein;
    this.GetTrein();
    this.timer = setInterval(() => {
      this.timeBetweenDates(this.geplandeAankomstDate);
      
    }, 1000);
  }

  GetTrein(){
    this.treinService.retrieveByNaam(this.treinNaam).subscribe(
      (trein : Trein) => {
        this.trein = trein;
        this.treinOrigin = trein.origin;
        this.geplandeAankomstString = trein.geplandeAankomsten[0];
        this.geplandeAankomstDate = new Date(this.geplandeAankomstString);
        this.geplandeAankomstTijd = this.geplandeAankomstString.substring(11,16)
        this.werkelijkeAankomstString = trein.werkelijkeAankomsten[0];
        this.werkelijkeAankomstDate = new Date(this.werkelijkeAankomstString);
        this.teLaat = trein.teLaat;
        console.log("GET trein request is succesful  " + trein)
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
      }
    )
  }

  getInzet(){
    this.inzetService.retrieveById(this.inzet.id).subscribe(
      (inzet : Inzet) => {
        
        console.log("GET inzet request is succesful  " + inzet)
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        this.resultaatComponent.resultaat = this.inzet.game.resultaat;
      }
    )
  }

  timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();
    if (difference <= 0) {
  
      // Timer done
      clearInterval(this.timer);
    
    } else {
      var seconds = Math.floor(difference / 1000);
      var minutes = Math.floor(seconds / 60);
      var hours = Math.floor(minutes / 60);
      var days = Math.floor(hours / 24);
  
      hours %= 24;
      minutes %= 60;
      seconds %= 60;

      this.hours = hours.toString();
      this.minutes = minutes.toString();
      this.seconds = seconds.toString();
      this.time = this.hours.toString().concat(":" + this.minutes.toString() + ":" + this.seconds.toString());
      if(hours == 0 && minutes == 0 && seconds == 0){
        this.getInzet();
        
      }
    }
}
}
