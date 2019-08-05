import { Component, OnInit, Input } from '@angular/core';
import { Inzet } from '../../domain/Inzet/inzet';

@Component({
  selector: 'app-resultaat-element',
  templateUrl: './resultaat-element.component.html',
  styleUrls: ['./resultaat-element.component.css']
})
export class ResultaatElementComponent implements OnInit {
@Input("inzet") inzet: Inzet;


  constructor(
 
  ) { }

  ngOnInit(){

  }
}


