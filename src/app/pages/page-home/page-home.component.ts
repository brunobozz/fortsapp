import { Component, OnInit } from '@angular/core';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
})
export class PageHomeComponent implements OnInit {
  public shopDailyTitle: string = '';
  public shopDaily: any = [];
  public shopFeaturedTitle: string = '';
  public shopFeatured: any = [];
  public shopSpecialFeaturedTitle: string = '';
  public shopSpecialFeatured: any = [];
  public shopSize: any = 1;
  public shopWrap: string = 'nowrap';

  constructor(private fortnitetracker: FortnitetrackerService) {}

  ngOnInit(): void {
    this.getShop();
    // this.getLog();
  }

  private getShop() {
    this.fortnitetracker
      .getDataLang('v2/', 'shop/br/')
      .subscribe((res: any) => {
        this.shopDailyTitle = res.data.daily.name;
        this.shopDaily = res.data.daily.entries;
        this.shopFeaturedTitle = res.data.featured.name;
        this.shopFeatured = res.data.featured.entries;

        this.shopSpecialFeaturedTitle = res.data.specialFeatured.name;
        this.shopSpecialFeatured = res.data.specialFeatured.entries;
      });
  }

  public changeWrap() {
    if (this.shopWrap === 'nowrap') {
      this.shopWrap = 'wrap';
      this.shopSize = 0.5;
    } else {
      this.shopWrap = 'nowrap';
      this.shopSize = 1;
    }
  }

  // private getLog() {
  //   this.fortnitetracker
  //     .getData('v2/', 'cosmetics/br/new')
  //     .subscribe((res: any) => {
  //       console.log(res);
  //     });
  // }
}
