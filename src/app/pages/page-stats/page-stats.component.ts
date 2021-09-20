import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FortnitetrackerService } from 'src/app/services/fortnitetracker/fortnitetracker.service';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.scss'],
})
export class PageStatsComponent implements OnInit {
  userStats: any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fortnitetracker: FortnitetrackerService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      if (param['username']) {
        this.getStats(param['username']);
      } else {
        this.getStats('brunobozz');
      }
    });
  }

  public searchStats(username: string) {
    this.router.navigate(['stats/' + username]);
  }

  private getStats(username: string) {
    this.fortnitetracker
      .getData('v2/', 'stats/br/v2?name=' + username)
      .subscribe((res: any) => {
        console.log(res);
        this.userStats = res.data;
      });
  }
}
