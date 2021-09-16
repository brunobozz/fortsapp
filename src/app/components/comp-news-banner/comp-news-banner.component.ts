import { Component, OnInit } from '@angular/core';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-comp-news-banner',
  templateUrl: './comp-news-banner.component.html',
  styleUrls: ['./comp-news-banner.component.scss'],
})
export class CompNewsBannerComponent implements OnInit {
  public newsBr: any = [];
  public newsCreative: any = [];

  constructor(private fortnitetracker: FortnitetrackerService) {}

  ngOnInit(): void {
    this.getNews();
  }

  private getNews() {
    this.fortnitetracker.getDataV2('news/').subscribe((res: any) => {
      this.newsBr = res.data.br.motds;
      this.newsCreative = res.data.creative.motds;
    });
  }
}
