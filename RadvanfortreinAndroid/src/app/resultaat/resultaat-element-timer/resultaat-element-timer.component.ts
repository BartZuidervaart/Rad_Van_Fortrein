import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() notify: EventEmitter<Trein> = new EventEmitter<Trein>();
  @Output() notifyResultaat: EventEmitter<number> = new EventEmitter<number>();
  @Input("inzet") inzet: Inzet;
  @Input("trein") trein: Trein;

  treinNaam: string;
  treinDirection: string;
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
  inzetGame: Inzet;
  resultaat: number;

  constructor(
    private treinService : TreinService,
    private inzetService : InzetService,
    private router: Router,
    private resultaatComponent : ResultaatComponent,
  ) { }

  ngOnInit() {
    this.treinNaam = this.inzet.game.trein;
    this.resultaat = this.inzet.game.resultaat;
    this.GetTrein();
    this.timer = setInterval(() => {
      this.timeBetweenDates(this.geplandeAankomstDate);
    }, 1000);
  }

  treinToResultaat(): void{
    console.log("Trein in resultaat wordt verstuurd" + JSON.stringify(this.trein));
    this.notify.emit(this.trein);
  }

  resultaatToResultaat():void {
    this.resultaat = this.inzetGame.game.resultaat;
    this.notifyResultaat.emit(this.inzetGame.game.resultaat);
  }

  GetTrein(){
    this.treinService.retrieveByNaam(this.treinNaam).subscribe(
      (trein : Trein) => {
        this.trein = trein;
        this.treinDirection = trein.direction;
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
        this.treinToResultaat();
      }
    )
  }

  getInzet(){
    this.inzetService.retrieveById(this.inzet.id).subscribe(
      (inzet : Inzet) => {
        this.inzetGame = inzet;
        console.log("GET inzet request is succesful  " + JSON.stringify(inzet));
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        this.resultaatToResultaat();
        console.log("UPDATE resultaat games is succesful " + this.resultaatComponent.resultaat)
      }
    )
  }

  // GetSpeler(){
  //   console.log("Speler wordt opgehaald " + JSON.stringify(this.resultaatComponent.speler));
  //   this.resultaatComponent.GetSpeler();
  // }

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
      if(hours == 0 && minutes == 0 && seconds == 5){
        this.getInzet();
      }
    }
}
}
