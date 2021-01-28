import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  
  rForm = new FormGroup({
    fullName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    email: new FormControl("", [Validators.required, Validators.pattern('[a-zA-Z0-9._]+@[a-zA-Z]+.[a-z]{2,4}$')]),
    address: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    tel: new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]{10}$')]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]+[!@#$%^&*_~]')]),
    confirmPwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('[a-zA-Z0-9]+[!@#$%^&*_~]')])
  });

  formData;

  onSubmit(data) {
    this.formData = data;    
  }

  get fullName() {
    return this.rForm.get('fullName');
  }

  get email() {
    return this.rForm.get('email');
  }

  get address() {
    return this.rForm.get('address');
  }

  get city() {
    return this.rForm.get('city');
  }

  get tel() {
    return this.rForm.get('tel');
  }

  get pwd() {
    return this.rForm.get('pwd');
  }

  get confirmPwd() {
    return this.rForm.get('confirmPwd');
  }
}