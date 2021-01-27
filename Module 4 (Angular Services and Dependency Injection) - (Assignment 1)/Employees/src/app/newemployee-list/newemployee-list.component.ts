import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { NewEmployee } from './employee2';

@Component({
  selector: 'app-newemployee-list',
  templateUrl: './newemployee-list.component.html',
  styleUrls: ['./newemployee-list.component.css']
})
export class NewEmployeeListComponent implements OnInit {
  
  editEmpClick;
  employee;
  empDetails: NewEmployee[];

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