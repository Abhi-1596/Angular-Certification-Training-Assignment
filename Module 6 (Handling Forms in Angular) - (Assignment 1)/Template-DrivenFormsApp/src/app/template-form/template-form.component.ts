import { Component } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  formData: any;

  submit(tdForm) {
    this.formData = tdForm;
  }
}