import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-comp-navbar',
  templateUrl: './comp-navbar.component.html',
  styleUrls: ['./comp-navbar.component.scss'],
})
export class CompNavbarComponent implements OnInit {
  public language = window.localStorage.getItem('language');
  public langList = ['ar', 'de', 'en' , 'es', 'fr', 'it', 'ja', 'ko', 'pl', 'pt-BR', 'ru', 'tr'];

  constructor(private fortnitetracker: FortnitetrackerService) {}

  ngOnInit(): void {}

  public changeLenguage(language: string) {
    this.fortnitetracker.changeLanguage(language);
  }
}
