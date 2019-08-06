import { Component, OnInit } from '@angular/core';
import { Speler } from '../domain/Speler/speler';
import { ActivatedRoute } from '@angular/router';
import { SpelerService } from '../services/speler.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-spelers',
  templateUrl: './spelers.component.html',
  styleUrls: ['./spelers.component.css']
})
export class SpelersComponent implements OnInit {

  speler: Speler;

  constructor(
    private route: ActivatedRoute,
    private spelerService: SpelerService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data =>
        this.spelerService.retrieveById(data.id).subscribe(
          (speler: Speler) => {
            this.speler = speler;
            console.log(speler.naam)
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
