import { Component, OnInit } from '@angular/core';
import { Inzet } from '../domain/Inzet/inzet';
import { ActivatedRoute } from '@angular/router';
import { InzetService } from '../services/inzet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-inzetten',
  templateUrl: './inzetten.component.html',
  styleUrls: ['./inzetten.component.css']
})
export class InzettenComponent implements OnInit {

  inzet : Inzet;

  constructor(
    private route: ActivatedRoute,
    private inzetService: InzetService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data =>
        this.inzetService.retrieveById(data.id).subscribe(
          (inzet: Inzet) => {
            this.inzet = inzet;
            console.log(inzet.inzetBedrag)
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
