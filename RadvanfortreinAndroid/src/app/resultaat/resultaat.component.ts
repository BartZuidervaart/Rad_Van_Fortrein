import { Component, OnInit } from '@angular/core';
import { Inzet } from '../domain/Inzet/inzet';
import { InzetService } from '../service/inzet.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-resultaat',
  templateUrl: './resultaat.component.html',
  styleUrls: ['./resultaat.component.css']
})
export class ResultaatComponent implements OnInit {

  inzetten: Inzet[];

  constructor(
    private inzetService: InzetService
  ) { }

  ngOnInit() {
    this.inzetService.retrieveAll().subscribe(
      (inzetten : Inzet[]) => this.inzetten = inzetten,
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {}
    )
  }

  getInzetten(){
    return this.inzetten;
  }

}
