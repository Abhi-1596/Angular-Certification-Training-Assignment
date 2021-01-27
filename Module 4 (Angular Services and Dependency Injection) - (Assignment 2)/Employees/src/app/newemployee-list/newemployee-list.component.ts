import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-newemployee-list',
  templateUrl: './newemployee-list.component.html',
  styleUrls: ['./newemployee-list.component.css']
})
export class NewEmployeeListComponent implements OnInit {
  
  editEmpClick;
  employee;
  empDetails: any[];
  errorMsg: any;

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.empService.getEmpData().subscribe( res => this.empDetails = res['data'], error => this.errorMsg = error.message);
  }

  editEmp(emp): void {    
    this.editEmpClick = !this.editEmpClick;
    this.employee = emp;
  }

  updateEmp(): void {
    console.log(this.employee);
    this.editEmpClick = !this.editEmpClick;
  }

  closeEmp(): void {
    this.editEmpClick = !this.editEmpClick;
  }
}