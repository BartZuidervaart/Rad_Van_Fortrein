import { Component, OnInit, Input } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';
import { Speler } from '../../domain/Speler/speler';

@Component({
  selector: 'app-resultaat-element',
  templateUrl: './resultaat-element.component.html',
  styleUrls: ['./resultaat-element.component.css']
})
export class ResultaatElementComponent implements OnInit {
@Input("inzet") inzet: Inzet;
@Input("speler") speler: Speler;
 
constructor(
 
  ) { }

  ngOnInit(){

  }
}


