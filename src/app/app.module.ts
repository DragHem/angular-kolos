import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerService } from './beer.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, BeerListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [BeerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
