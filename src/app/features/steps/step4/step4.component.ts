import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormWizardService } from '~core/components/form-wizard/form-wizard.service';
import { FormWizardStepBaseComponent } from '~core/components/form-wizard/form-wizard-step-base.component';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'step4',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    IftaLabelModule
  ],
  templateUrl: './step4.component.html',
})
export class Step4Component extends FormWizardStepBaseComponent {
  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      college: new FormControl('', [Validators.required]),
      course: new FormControl('', [Validators.required]),
      yop: new FormControl(null, [Validators.required]),
      cgpa: new FormControl(null, [Validators.required]),
    };
    super(2, wizardService.getSteps(), true, formcontrols);
  }
}
