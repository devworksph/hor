import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormWizardService } from '~core/components/form-wizard/form-wizard.service';
import { FormWizardStepBaseComponent } from '~core/components/form-wizard/form-wizard-step-base.component';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { CheckboxModule } from 'primeng/checkbox';
import { FileUploadModule } from 'primeng/fileupload';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'step3',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    AccordionModule,
    InputTextModule,
    IftaLabelModule,
    CheckboxModule,
    FileUploadModule,
    SelectModule
  ],
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3Component extends FormWizardStepBaseComponent {
  public maritalStatus = [
    { name: 'Single', value: 'Single'},
    { name: 'Married', value: 'Married'},
    { name: 'Separated', value: 'Separated'},
  ];

  public ageRange = [
    { name: 'Children', value: 'Children'},
    { name: 'Teenagers', value: 'Teenagers'},
    { name: 'Adults', value: 'Adults'},
    { name: 'Seniors', value: 'Seniors'},
  ];

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

  public onBasicUploadAuto() {

  }
}
