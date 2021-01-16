import { StartLocationSelectorComponent } from './views/start-location/start-location-selector.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: '', redirectTo: '/start-location', pathMatch: 'full' },
  {path: '**', redirectTo: '/start-location', pathMatch: 'full' },
  {path: 'start-location', component: StartLocationSelectorComponent },
];

export const AppRouting = RouterModule.forRoot(routesConfig);
