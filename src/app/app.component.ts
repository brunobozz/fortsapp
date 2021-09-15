import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'fortsapp';
  language = window.localStorage.getItem('language');

  ngOnInit(): void {
    if (!this.language) {
      window.localStorage.setItem('language', 'pt-BR');
      window.location.reload();
    }
  }
}
