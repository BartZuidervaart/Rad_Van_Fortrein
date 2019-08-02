import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

export interface Trein {
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
  aantalPunten = 0;
  selectedTrein: string;

  treinen:  Trein[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      selectedTrein: new FormControl()
    });
    this.secondFormGroup = new FormGroup({
      aantalPunten: new FormControl()
    });
  }

  submit(){
    //Hier moet de inzet worden verstuurd!
  }

}
