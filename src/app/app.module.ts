import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShelfComponent } from './shelf/shelf.component';
import { PanelComponent } from './panel/panel.component';
import { PagingComponent } from './paging/paging.component';
import { FilteringComponent } from './filtering/filtering.component';
import { FooterComponent } from './footer/footer.component';
import { BannerAdComponent } from './banner-ad/banner-ad.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShelfComponent,
    PanelComponent,
    PagingComponent,
    FilteringComponent,
    FooterComponent,
    BannerAdComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
