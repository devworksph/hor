import { rootPaths } from '~core/constants/paths.constants';
import { Error404Component } from '~core/components/error-404/error-404.component';
import type { Route } from '@angular/router';
import { HomeComponent } from '~features/home/home.component';

export const appRoutes: Route[] = [
  {
    path: rootPaths.home,
    component: HomeComponent,
  },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];
