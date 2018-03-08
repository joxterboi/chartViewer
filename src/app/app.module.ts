import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SavedAirportsComponent } from './components/saved-airports/saved-airports.component';
import { SavedPlatesComponent } from './components/saved-plates/saved-plates.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SavedAirportsComponent,
    SavedPlatesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
