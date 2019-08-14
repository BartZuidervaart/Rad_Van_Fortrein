import { Component, OnInit } from '@angular/core';
import { Trein } from '../domain/Trein/trein';
import { ActivatedRoute, Router } from '@angular/router';
import { TreinService } from '../services/trein.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-trein',
  templateUrl: './trein.component.html',
  styleUrls: ['./trein.component.css']
})
export class TreinComponent implements OnInit {

  trein : Trein;

  constructor(
    private route:ActivatedRoute,
    private treinService:TreinService,
    private router:Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data =>
        this.treinService.retrieveByNaam(data.naam).subscribe(
          (trein: Trein) => {
            this.trein = trein;
            console.log(trein.direction)
          },
          (fout: HttpErrorResponse) =>
            alert("Er is een fout opgetreden: " +
              fout.error.error.status + " " + fout.error.error + "\n" +
              "\nMessage:\n" + fout.error.message
            )
        )
    )
  }

}
