import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trein } from '../../../../src/app/domain/Trein/trein';
import { HttpErrorResponse } from '@angular/common/http';
import { TreinService } from '../../../../src/app/services/trein.service';

const ELEMENT_DATA: Trein[] = [];

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit{
  @Output() notify: EventEmitter<Trein> = new EventEmitter<Trein>();
  displayedColumns: string[] = ['select', 'tijd', 'vertrekstation'];
  selectedEntry;
  treinen: Trein[];
  selection = new SelectionModel<Trein>(true, []);

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

  onSelectionChange(entry) {
    this.selectedEntry = entry;
    this.notify.emit(this.selectedEntry);
  }
}

