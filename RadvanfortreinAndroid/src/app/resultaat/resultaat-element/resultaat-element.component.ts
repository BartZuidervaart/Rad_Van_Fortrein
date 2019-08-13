import { Component, OnInit, Input } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';
import { TreinService } from '../../services/trein.service'
import { Trein } from '../../domain/Trein/trein';
import { HttpErrorResponse } from '@angular/common/http';
import { InzetService } from '../../services/inzet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resultaat-element',
  templateUrl: './resultaat-element.component.html',
  styleUrls: ['./resultaat-element.component.css']
})
export class ResultaatElementComponent implements OnInit {
@Input("inzet") inzet: Inzet;
@Input("trein") trein: Trein;
//@Input("speler") speler: Speler;

teWinnenPunten : number;
//trein : Trein;
treinNaam: string;
treinOrigin: string;
geplandeAankomstTijd: string;
werkelijkeAankomstTijd: string;
teLaat: boolean;
resultaatTeLaat: boolean;
 
constructor(
  private treinService : TreinService,
  private inzetService : InzetService,
  private router: Router
  ) { }

  ngOnInit(){
    this.treinNaam = this.inzet.game.trein;
    console.log(JSON.stringify(this.inzet.game.trein));
    console.log(this.treinNaam);
    this.GetTrein();
    if (this.inzet.game.resultaat == 1){
      this.resultaatTeLaat = true;
    } else{
      this.resultaatTeLaat = false;
    }
  }

  GetTrein(){
    this.treinService.retrieveByNaam(this.treinNaam).subscribe(
      (trein : Trein) => {
        this.trein = trein;
        this.treinOrigin = trein.origin;
        this.geplandeAankomstTijd = trein.geplandeAankomsten[0].substring(11,16);
        this.werkelijkeAankomstTijd = trein.werkelijkeAankomsten[0].substring(11,16);
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
}


