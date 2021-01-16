import { StartLocationSelectorComponent } from './start-location-selector.component';
import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: 'start-location', component: StartLocationSelectorComponent}
];

export const StartLocationRouting = RouterModule.forChild(routesConfig);
