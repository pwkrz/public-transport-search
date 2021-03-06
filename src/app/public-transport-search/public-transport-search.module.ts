import { RouteSuggestionsModule } from './components/route-suggestions/route-suggestions.module';
import { PTSRouting } from './p-t-s.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicTransportSearchComponent } from './public-transport-search.component';
import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { DestinationSelectorComponent } from './views/destination/destination-selector.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceSelectorModule } from './components/place-selector/place-selector.module';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';

@NgModule({
  declarations: [
    PublicTransportSearchComponent, StartLocationSelectorComponent, DestinationSelectorComponent, NavbarComponent, ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    PlaceSelectorModule,
    RouteSuggestionsModule,
    PTSRouting,
  ],
  exports: [PublicTransportSearchComponent]
})
export class PublicTransportSearchModule { }
