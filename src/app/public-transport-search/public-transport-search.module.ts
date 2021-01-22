import { PTSRouting } from './p-t-s.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicTransportSearchComponent } from './public-transport-search.component';
import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { DestinationSelectorComponent } from './views/destination/destination-selector.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { PlaceSelectorModule } from './elements/place-selector/place-selector.module';

@NgModule({
  declarations: [
    PublicTransportSearchComponent, StartLocationSelectorComponent, DestinationSelectorComponent, NavbarComponent
  ],
  imports: [
    CommonModule,
    PlaceSelectorModule,
    PTSRouting,
  ],
  exports: [PublicTransportSearchComponent]
})
export class PublicTransportSearchModule { }
