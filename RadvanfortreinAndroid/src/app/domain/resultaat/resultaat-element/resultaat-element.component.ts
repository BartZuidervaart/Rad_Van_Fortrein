import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultaat-element',
  templateUrl: './resultaat-element.component.html',
  styleUrls: ['./resultaat-element.component.css']
})
export class ResultaatElementComponent implements OnInit {
  panelOpenState = false;
  resultaat = true;
  teWinnenPunten = 5;
  isOpTijd = true;
  
  constructor() { }

  ngOnInit() {
  }

}
