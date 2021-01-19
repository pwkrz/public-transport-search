import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { PlaceSelectorModule } from './elements/place-selector/place-selector.module';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DestinationSelectorComponent } from './views/destination/destination-selector.component';
import { NavbarComponent } from './views/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent, StartLocationSelectorComponent, DestinationSelectorComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    PlaceSelectorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
