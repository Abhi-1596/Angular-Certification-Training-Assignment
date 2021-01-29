import { FormGroup } from "@angular/forms";

export function CheckPassValidator(controlName: string, matchingControlName: string) {
    return (fb: FormGroup) => {

        const control = fb.controls[controlName];
        const matchingControl = fb.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}