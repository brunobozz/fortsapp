import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageShopComponent } from './pages/page-shop/page-shop.component';
import { PageStatsComponent } from './pages/page-stats/page-stats.component';

const routes: Routes = [
  {
    path: 'stats',
    component: PageStatsComponent,
  },
  {
    path: 'stats/:username',
    component: PageStatsComponent,
  },
  {
    path: 'shop',
    component: PageShopComponent,
  },
  {
    path: 'home',
    component: PageHomeComponent,
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
