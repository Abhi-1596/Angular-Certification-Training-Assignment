import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CheckPassValidator } from './checkPass.validator';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm: FormGroup;
  formData;
  displayFormData;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({

      fullName: ["", [Validators.required, Validators.minLength(3)]],
      email: ["", [Validators.required, Validators.pattern('[a-zA-Z0-9._]+@[a-zA-Z]+[.][a-z]{2,4}$')]],
      address: ["", Validators.required],
      city: ["", Validators.required],
      tel: ["", [Validators.required, Validators.minLength(10), Validators.pattern('[0-9]{10}$')]],
      pwd: ["", [Validators.required, Validators.minLength(8)]],
      confirmPwd: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validator: CheckPassValidator('pwd', 'confirmPwd')
    });
  }

  onSubmit(data) {
    this.formData = data;
    this.onClickSubmitOrClose();
  }

  onClickSubmitOrClose() {
    this.displayFormData = !this.displayFormData;
  }

  get fullName() { return this.reactiveForm.get('fullName'); }
  get email() { return this.reactiveForm.get('email'); }
  get address() { return this.reactiveForm.get('address'); }
  get city() { return this.reactiveForm.get('city'); }
  get tel() { return this.reactiveForm.get('tel'); }
  get pwd() { return this.reactiveForm.get('pwd'); }
  get confirmPwd() { return this.reactiveForm.get('confirmPwd'); }
}