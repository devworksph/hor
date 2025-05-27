import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormWizardService } from '~core/components/form-wizard/form-wizard.service';
import { FormWizardStepBaseComponent } from '~core/components/form-wizard/form-wizard-step-base.component';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'step1',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RadioButtonModule
  ],
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component extends FormWizardStepBaseComponent {
  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      location: new FormControl('', [Validators.required]),
    };
    
    super(1, wizardService.getSteps(), true, formcontrols);
  }
}
