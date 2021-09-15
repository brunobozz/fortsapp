import { Component, OnInit } from '@angular/core';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-page-shop',
  templateUrl: './page-shop.component.html',
  styleUrls: ['./page-shop.component.scss'],
})
export class PageShopComponent implements OnInit {
  public shopDaily: any = [];
  public shopFeatured: any = [];
  public shopSpecialFeatured: any = [];

  constructor(private fortnitetracker: FortnitetrackerService) {}

  ngOnInit(): void {
    this.getShop();
  }

  private getShop() {
    this.fortnitetracker.getDataV2('shop/br/').subscribe((res: any) => {
      this.shopDaily = res.data.daily.entries;
      this.shopFeatured = res.data.featured.entries;
      // this.shopSpecialFeatured = res.data.specialFeatured.entries;
      console.log(this.shopFeatured);
    });
  }
}
