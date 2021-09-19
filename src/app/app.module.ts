import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageShopComponent } from './pages/page-shop/page-shop.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { CompPageHeaderComponent } from './components/comp-page-header/comp-page-header.component';
import { PageNewsComponent } from './pages/page-news/page-news.component';
import { CompNewsBannerComponent } from './components/comp-news-banner/comp-news-banner.component';
import { CompMapComponent } from './components/comp-map/comp-map.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { CompShopComponent } from './components/comp-shop/comp-shop.component';
import { CompFooterComponent } from './components/comp-footer/comp-footer.component';
import { CompPlaylistsComponent } from './components/comp-playlists/comp-playlists.component';
import { CompMenuComponent } from './components/comp-menu/comp-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PageShopComponent,
    CompNavbarComponent,
    CompPageHeaderComponent,
    PageNewsComponent,
    CompNewsBannerComponent,
    CompMapComponent,
    PageHomeComponent,
    CompShopComponent,
    CompFooterComponent,
    CompPlaylistsComponent,
    CompMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
