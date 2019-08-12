import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit{
  
  title = 'angular-material-tab-router';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'rvft_icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/Trein-icon.svg")
    );
    this.navLinks = [
      {
        label: 'Home',
        link: 'home',
        index: 1,
        icon: 'home'
      }, {
        label: 'Inzetten',
        link: 'inzet',
        index: 2,
        icon: 'train'
      }, {
        label: 'Resultaat',
        link: 'resultaat',
        index: 3,
        icon:'check_circle'
      },
    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
  }
}