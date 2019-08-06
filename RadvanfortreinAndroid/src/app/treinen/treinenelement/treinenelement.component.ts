import { Component, OnInit, Input } from '@angular/core';
import { Trein } from '../../../../src/app/domain/Trein/trein';

@Component({
  selector: 'app-treinenelement',
  templateUrl: './treinenelement.component.html',
  styleUrls: ['./treinenelement.component.css']
})
export class TreinenelementComponent implements OnInit {
  @Input("trein") trein: Trein;

  constructor() { }

  ngOnInit() {
  }

}
