import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';
import { TreinService } from '../../services/trein.service'
import { Trein } from '../../domain/Trein/trein';
import { HttpErrorResponse } from '@angular/common/http';
import { InzetService } from '../../services/inzet.service';
import { Router } from '@angular/router';
import { ResultaatComponent } from '../resultaat.component';

@Component({
  selector: 'app-resultaat-element',
  templateUrl: './resultaat-element.component.html',
  styleUrls: ['./resultaat-element.component.css']
})
export class ResultaatElementComponent implements OnInit {
@Output() notify: EventEmitter<Trein> = new EventEmitter<Trein>();
@Input("inzet") inzet: Inzet;
@Input("trein") trein: Trein;

teWinnenPunten : number;
treinNaam: string;
treinDirection: string;
geplandeAankomstTijd: string;
werkelijkeAankomstTijd: string;
teLaat: boolean;
resultaat: number;
 
constructor(
  private treinService : TreinService,
  private inzetService : InzetService,
  private router: Router,
  private resultaatComponent : ResultaatComponent,
  ) { }

  ngOnInit(){
    this.treinNaam = this.inzet.game.trein;
    this.GetTrein();
    this.resultaat = this.resultaatComponent.resultaat;
  }

  treinToResultaat(): void{
    console.log("Trein in resultaat wordt verstuurd" + JSON.stringify(this.trein));
    this.notify.emit(this.trein);
  }

  GetTrein(){
    this.treinService.retrieveByNaam(this.treinNaam).subscribe(
      (trein : Trein) => {
        this.trein = trein;
        this.treinDirection = trein.direction;
        this.geplandeAankomstTijd = trein.geplandeAankomsten[0].substring(11,16);
        this.werkelijkeAankomstTijd = trein.werkelijkeAankomsten[0].substring(11,16);
        this.teLaat = trein.teLaat;
        console.log("GET trein request is succesful  " + trein);
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        this.treinToResultaat();
      }
    )
  }

  DeleteInzet(){
    this.inzetService.delete(this.inzet.id).subscribe(
      () => {
        console.log("DELETE inzet request is succesful ", this.inzet);
      },
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {
        this.router.navigate(['redirect', 'resultaat'])
      }

    )
  }

  refreshResultaat(){
    this.router.navigate(['redirect', 'resultaat'])
  }
}


