import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDataService } from './comics-data.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ComicComponent } from './comic/comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ComicsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
