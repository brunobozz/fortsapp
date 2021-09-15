import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { PageShopComponent } from './pages/page-shop/page-shop.component';

const routes: Routes = [
  {
    path: 'news',
    component: PageNewsComponent,
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
