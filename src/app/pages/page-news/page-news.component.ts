import { Component, OnInit } from '@angular/core';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-page-news',
  templateUrl: './page-news.component.html',
  styleUrls: ['./page-news.component.scss'],
})
export class PageNewsComponent implements OnInit {
  public news: any = [];

  constructor() {}

  ngOnInit(): void {}
}
