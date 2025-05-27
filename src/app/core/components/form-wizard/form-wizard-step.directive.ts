import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[formWizardStep]'
})
export class FormWizardStepDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}