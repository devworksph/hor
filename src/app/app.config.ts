import type { ApplicationConfig } from '@angular/core';
import { inject, provideExperimentalZonelessChangeDetection } from '@angular/core';
import {
  createUrlTreeFromSnapshot,
  PreloadAllModules,
  provideRouter,
  Router,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
  withViewTransitions,
} from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideCloudinaryLoader } from '@angular/common';
import { providePrimeNG } from 'primeng/config';
import { ENVIRONMENT } from '~core/tokens/environment.token';
import { environment } from '~environments/environment';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: ENVIRONMENT,
      useValue: environment,
    },
    provideExperimentalZonelessChangeDetection(),
    provideRouter(
      appRoutes,
      withInMemoryScrolling(),
      withViewTransitions({
        onViewTransitionCreated: ({ transition, to }) => {
          const router = inject(Router);
          const toTree = createUrlTreeFromSnapshot(to, []);
          // Skip the transition if the only thing changing is the fragment and queryParams
          if (
            router.isActive(toTree, {
              paths: 'exact',
              matrixParams: 'exact',
              fragment: 'ignored',
              queryParams: 'ignored',
            })
          ) {
            transition.skipTransition();
          }
        },
      }),
      withComponentInputBinding(),
      withRouterConfig({ paramsInheritanceStrategy: 'always', onSameUrlNavigation: 'reload' }),
      withPreloading(PreloadAllModules),
    ),
    provideHttpClient(
      withFetch(),
    ),
    provideAnimationsAsync(),
    providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    provideCloudinaryLoader('https://res.cloudinary.com/ismaestro/'),
  ],
};
