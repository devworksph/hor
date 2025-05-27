import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormWizardService } from '~core/components/form-wizard/form-wizard.service';
import { FormWizardStepBaseComponent } from '~core/components/form-wizard/form-wizard-step-base.component';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';

@Component({
  selector: 'step2',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectModule,
    IftaLabelModule
  ],
  templateUrl: './step2.component.html'
})
export class Step2Component extends FormWizardStepBaseComponent {
  public selectedCity: string = '';
  public visitorType = [
    { name: 'Student', value: 'Student'},
    { name: 'Local Government', value: 'Local Government'},
    { name: 'Foreign Visitor', value: 'Foreign Visitor'},
  ];
  public bookingType = [
    { name: 'Individual', value: 'Individual' },
    { name: 'Group', value: 'Group' }
  ];
  public studentType = [
    { name: 'Pre - Elementary', value: 'Pre - Elementary' },
    { name: 'Elementary', value: 'Elementary' },
    { name: 'High school', value: 'High school' },
    { name: 'College', value: 'College' },
    { name: 'Post Graduate', value: 'Post Graduate' },
  ];

  constructor(
    private wizardService: FormWizardService
  ) {
    const formcontrols = {
      visitorType: new FormControl('', [Validators.required]),
      bookingType: new FormControl('', [Validators.required]),
    };

    super(2, wizardService.getSteps(), true, formcontrols);
  }

  ngOnInit() {}
}
