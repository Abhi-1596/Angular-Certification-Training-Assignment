import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  editEmpClick;
  employee;
  empDetails: Employee[];

  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.empService.getEmpData().subscribe( data => this.empDetails = data);
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