import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SavedAirportsComponent } from './components/saved-airports/saved-airports.component';
import { SavedPlatesComponent } from './components/saved-plates/saved-plates.component';
import { SearchComponent } from './components/search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { ChartComponent } from './components/chart/chart.component';
import { FullScreenComponent } from './components/full-screen/full-screen.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SavedAirportsComponent,
    SavedPlatesComponent,
    SearchComponent,
    ChartComponent,
    FullScreenComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
