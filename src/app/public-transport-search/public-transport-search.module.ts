import { RouteSuggestionsModule } from './components/route-suggestions/route-suggestions.module';
import { RoutesComponent } from './views/routes/routes.component';
import { PTSRouting } from './p-t-s.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicTransportSearchComponent } from './public-transport-search.component';
import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { DestinationSelectorComponent } from './views/destination/destination-selector.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlaceSelectorModule } from './components/place-selector/place-selector.module';

@NgModule({
  declarations: [
    PublicTransportSearchComponent, StartLocationSelectorComponent, DestinationSelectorComponent, NavbarComponent, RoutesComponent
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
