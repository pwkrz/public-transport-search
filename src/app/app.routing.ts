import { RouterModule, Routes } from '@angular/router';

const routesConfig: Routes = [
  {path: '', redirectTo: '/start-location', pathMatch: 'full' },
  {path: '**', redirectTo: '/start-location', pathMatch: 'full' }
];

export const AppRouting = RouterModule.forRoot(routesConfig);
