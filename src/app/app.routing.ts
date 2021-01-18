import { DestinationSelectorComponent } from './views/destination/destination-selector.component';
import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: '', redirectTo: '/start-location', pathMatch: 'full' },
  {path: 'start-location', component: StartLocationSelectorComponent },
  {path: 'destination', component: DestinationSelectorComponent },
  {path: '**', redirectTo: '/start-location', pathMatch: 'full' },
];

export const AppRouting = RouterModule.forRoot(routesConfig);
