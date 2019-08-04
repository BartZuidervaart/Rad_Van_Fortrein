import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { TabelComponent } from './tabel/tabel.component';

export interface Trein {
  naam: string;
  beginStation: string;
  station: string;
  tijd: string;
}

export interface Keuze {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-inzet',
  templateUrl: './inzet.component.html',
  styleUrls: ['./inzet.component.css']
})
export class InzetComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  aantalPunten = 0;
  selectedTrein: string;
  keuzeTeLaat: string;

  treinen:  Trein[] = [
    {naam: 'ns 2273', beginStation: 'Vlissingen', station: 'Amsterdam', tijd: '12:07'},
    {naam: 'ns 4066', beginStation: 'Rotterdam Centraal', station: 'Amsterdam', tijd: '12:13'},
    {naam: 'ns 14668', beginStation: 'Zwolle', station: 'Amsterdam', tijd: '12:19'}
  ];

  keuzes: Keuze[] = [
    {value: 'op tijd is', viewValue: 'Op tijd'},
    {value: 'te laat komt', viewValue: 'Te laat'}
  ];

  constructor() { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      selectedTrein: new FormControl()
    });
    this.secondFormGroup = new FormGroup({
      keuzeTeLaat: new FormControl()
    });
    this.thirdFormGroup = new FormGroup({
      aantalPunten: new FormControl()
    });
  }

  submit(){
    console.log(this.selectedTrein, this.keuzeTeLaat, this.aantalPunten);
    //Hier moet de inzet worden verstuurd!
    //En je gaat weer terug naar de home pagina
  }

}
