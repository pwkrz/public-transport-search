import { DestinationGuard } from './view-guards/destination.guard';
import { StartLocationGuard } from './view-guards/start-location.guard';
import { DestinationSelectorComponent } from './views/destination/destination-selector.component';
import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: '', redirectTo: '/start-location', pathMatch: 'full' },
  {path: 'start-location', canActivate: [StartLocationGuard], component: StartLocationSelectorComponent },
  {path: 'destination', canActivate: [DestinationGuard], component: DestinationSelectorComponent },
  {path: '**', redirectTo: '/start-location', pathMatch: 'full' },
];

export const PTSRouting = RouterModule.forRoot(routesConfig);
