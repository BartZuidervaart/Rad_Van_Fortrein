import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fiets',
  templateUrl: './fiets.component.html',
  styleUrls: ['./fiets.component.css']
})
export class FietsComponent implements OnInit {

  datum: string;
  tijd: string;
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(){
    setInterval(() =>
    {
      let d : Date = new Date();
      this.datum = d.toLocaleDateString();
      this.tijd = d.toLocaleTimeString();
    },
    1000)

    
  }
}