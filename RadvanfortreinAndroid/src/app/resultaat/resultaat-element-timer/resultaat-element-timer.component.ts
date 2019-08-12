import { Component, OnInit, Input } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';
import { Trein } from '../../domain/Trein/trein';
import { TreinService } from '../../services/trein.service';
import { HttpErrorResponse } from '@angular/common/http';

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
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        console.log(JSON.stringify(this.trein));
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
    }
  

}
}
