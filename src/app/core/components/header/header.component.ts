import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { rootPaths } from '~core/constants/paths.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeaderComponent {
  private readonly router = inject(Router);

  readonly rootPaths = rootPaths;
  
}
