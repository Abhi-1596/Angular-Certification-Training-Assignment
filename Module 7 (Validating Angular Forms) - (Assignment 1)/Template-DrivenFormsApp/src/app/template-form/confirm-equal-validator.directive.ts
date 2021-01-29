import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirmEqualValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: ConfirmEqualValidatorDirective,
    multi: true
  }]
})

export class ConfirmEqualValidatorDirective implements Validator {
  
  @Input() appConfirmEqualValidator: string;
  
  validate(control: AbstractControl) : {[key : string]: any} | null {
    
    const controlToBeCompared = control.parent.get(this.appConfirmEqualValidator);
    
    if (controlToBeCompared && controlToBeCompared.value !== control.value ) {
      return {'notEqual': true};
    }
    
    return null;
  }
}