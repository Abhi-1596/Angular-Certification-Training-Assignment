import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  
  rForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    tel: new FormControl(),
    pwd: new FormControl(),
    confirmPwd: new FormControl()
  });

  formData;

  onSubmit(data) {
    this.formData = data;
  }
}
