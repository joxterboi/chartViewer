import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SavedAirportsComponent } from './components/saved-airports/saved-airports.component';
import { SavedPlatesComponent } from './components/saved-plates/saved-plates.component';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    AppComponent,
    SavedAirportsComponent,
    SavedPlatesComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
