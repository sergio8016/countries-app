import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'byCapital',
    pathMatch: 'full'
  },
  {
    path: 'byCapital',
    loadComponent: () => import('./pages/by-capital-page/by-capital-page.component').then(m => m.ByCapitalPageComponent)
  },
  {
    path: 'byCountry',
    loadComponent: () => import('./pages/by-country-page/by-country-page.component').then(m => m.ByCountryPageComponent)
  },
  {
    path: 'byRegion',
    loadComponent: () => import('./pages/by-region-page/by-region-page.component').then(m => m.ByRegionPageComponent)
  },
  {
    path: 'byCountry/:id',
    loadComponent: () => import('./pages/country-page/country-page.component').then(m => m.CountryPageComponent)
  },
  {
    path: '**',
    redirectTo: '/byCapital',
    pathMatch: 'full'
  }
];
