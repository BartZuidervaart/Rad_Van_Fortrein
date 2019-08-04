import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Trein {
  tijd: string;
  vertrekstation: string;
  station: string;  
  naam: string;
}

const ELEMENT_DATA: Trein[] = [
  {  tijd: '12:07', vertrekstation: 'Vlissingen', station: 'Amsterdam',  naam: 'ns 2273' },
  {  tijd: '12:13', vertrekstation: 'Rotterdam Centraal', station: 'Amsterdam',  naam: 'ns 4066' },
  {  tijd: '12:19', vertrekstation: 'Zwolle', station: 'Amsterdam',  naam: 'ns 14668' },
];

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent {
  displayedColumns: string[] = ['select', 'tijd', 'vertrekstation'];
  dataSource = new MatTableDataSource<Trein>(ELEMENT_DATA);
  selection = new SelectionModel<Trein>(true, []);
  selectedEntry;

  onSelectionChange(entry) {
    this.selectedEntry = entry;
    console.log(this.selectedEntry);
  }

  submit() {
    console.log(this.selectedEntry.naam);
  }
}

