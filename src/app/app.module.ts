import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { PlaceSelectorModule } from './elements/place-selector/place-selector.module';
import { AppRouting } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, StartLocationSelectorComponent
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
