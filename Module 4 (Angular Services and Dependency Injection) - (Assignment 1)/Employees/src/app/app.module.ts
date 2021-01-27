import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorDirective } from './directives/color.directive';
import { EmployeeService } from './services/employee.service';
import { NewEmployeeListComponent } from './newemployee-list/newemployee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorDirective,
    NewEmployeeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
