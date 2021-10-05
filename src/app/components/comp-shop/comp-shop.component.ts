import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-shop',
  templateUrl: './comp-shop.component.html',
  styleUrls: ['./comp-shop.component.scss'],
})
export class CompShopComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() shop: any;
  @Input() size?: number = 1;
  @Input() wrap?: string = 'nowrap';

  constructor() {}

  ngOnInit(): void {}
}
