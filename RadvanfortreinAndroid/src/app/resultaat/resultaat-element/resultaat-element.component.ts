import { Component, OnInit } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';
import { ActivatedRoute } from '@angular/router';
import { InzetService } from '../../service/inzet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resultaat-element',
  templateUrl: './resultaat-element.component.html',
  styleUrls: ['./resultaat-element.component.css']
})
export class ResultaatElementComponent implements OnInit {

  inzet: Inzet;

  constructor(
    private route: ActivatedRoute,
    private inzetService: InzetService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      data =>
        this.inzetService.retrieveById(7).subscribe(
          (inzet: Inzet) => this.inzet = inzet,
          (fout: HttpErrorResponse) =>
            alert("Er is een fout opgetreden: " +
              fout.error.error.status + " " + fout.error.error + "\n" +
              "\nMessage:\n" + fout.error.message
            )
        )
    )
    console.log("blub " + this.inzet)
  }
}


