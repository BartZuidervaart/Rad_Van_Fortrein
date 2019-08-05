import { Component, OnInit } from '@angular/core';
import { Trein } from '../domain/Trein/trein';
import { TreinService } from '../services/trein.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-treinen',
  templateUrl: './treinen.component.html',
  styleUrls: ['./treinen.component.css']
})
export class TreinenComponent implements OnInit {

  treinen: Trein[];

  constructor(
    private treinService: TreinService
  ) { }

  ngOnInit() {
    this.treinService.retrieveAll().subscribe(
      (treinen: Trein[]) => this.treinen = treinen,
      (error = HttpErrorResponse) => {
        console.log(error);
      },
      () => {}
    )
  }

  getTreinen() {
    return this.treinen;
  }

}
