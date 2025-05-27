import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormWizardService } from '~core/components/form-wizard/form-wizard.service';
import { FormWizardStepBaseComponent } from '~core/components/form-wizard/form-wizard-step-base.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';

@Component({
  selector: 'step3',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule,
    IftaLabelModule,
    CheckboxModule,
    FileUploadModule
  ],
  templateUrl: './step3.component.html',
})
export class Step3Component extends FormWizardStepBaseComponent {
  constructor(private wizardService: FormWizardService) {
    const formcontrols = {
      lastName: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      middleName: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      ageRange: new FormControl(null, [Validators.required]),
    };
    super(2, wizardService.getSteps(), true, formcontrols);
  }
}
