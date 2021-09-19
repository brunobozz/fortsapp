import { Component, OnInit } from '@angular/core';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-comp-map',
  templateUrl: './comp-map.component.html',
  styleUrls: ['./comp-map.component.scss'],
})
export class CompMapComponent implements OnInit {
  public map: any = [];

  constructor(private fortnitetracker: FortnitetrackerService) {}

  ngOnInit(): void {
    this.getMap();
  }

  private getMap() {
    this.fortnitetracker.getDataLang('v1', 'map/').subscribe((res: any) => {
      this.map = res.data;
      console.log(this.map);
    });
  }
}
