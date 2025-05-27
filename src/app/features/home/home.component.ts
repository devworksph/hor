import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { interval } from 'rxjs';
import { AnalyticsService } from '~core/services/analytics.service';
import { FormWizardComponent } from '~core/components/form-wizard/form-wizard.component';
import { IStepperOptions, IWizardStep } from '~core/components/form-wizard/form-wizard.model';
import { Step1Component } from '../steps/step1/step1.component';
import { Step2Component } from '../steps/step2/step2.component';
import { Step3Component } from '../steps/step3/step3.component';
import { Step4Component } from '../steps/step4/step4.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [FormWizardComponent],
})
export class HomeComponent {
  private readonly analyticsService = inject(AnalyticsService);
  readonly activeUsersResource = this.analyticsService.getRealtimeUsersResource();

  public steps: IWizardStep[] = [
    {
      id: 1,
      title: 'Schedule',
      description: 'Check available dates',
      data: null,
      component: Step1Component
    },
    {
      id: 2,
      title: 'Type of Booking',
      description: 'Booking Details',
      data: null,
      component: Step2Component
    },
    {
      id: 3,
      title: 'Registration',
      description: 'Visitor Details',
      data: null,
      component: Step3Component
    },
    {
      id: 4,
      title: 'Review Details',
      description: 'Check details provided',
      data: null,
      component: Step4Component
    }
  ];

  public stepperOptions: IStepperOptions = {
    custom: true,
    position: 'top'
  };

  constructor() {
    this.activeUsersResource.reload();
    effect(() => {
      const sub = interval(5000).subscribe(() => {
        this.activeUsersResource.reload();
      });
      return () => {
        sub.unsubscribe();
      };
    });
  }

  onFinish(): void {
    alert('Wizard Finished!!');
  }

  onCancel(): void {
    alert('Wizard Cancelled!!');
  } 
}
