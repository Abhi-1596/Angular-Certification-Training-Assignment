import { Component } from '@angular/core';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  formData: any;
  data;

  onSubmit(tdForm) {
    this.formData = tdForm;
    this.onClickSubmitOrClose();
  }

  onClickSubmitOrClose() {
    this.data = !this.data;
  }
}