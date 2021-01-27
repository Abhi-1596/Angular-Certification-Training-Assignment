import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  empDetails: Employee[] = [
    {
      "empId": 123,
      "firstName": "Abhilash",
      "lastName": "Mishra",
      "dept": "R&D",
      "city": "Bangalore",
      "eMail": "abhilash.mishra.10@gmail.com"
    },
    {
      "empId": 154,
      "firstName": "Abhinav Pranjal",
      "lastName": "Rai",
      "dept": "DevOps",
      "city": "Noida",
      "eMail": "rai.abhinav95@gmail.com"
    },
    {
      "empId": 174,
      "firstName": "G. Sravan",
      "lastName": "Kumar",
      "dept": "R&D",
      "city": "Bangalore",
      "eMail": "g.sraven.96@gmail.com"
    },
    {
      "empId": 220,
      "firstName": "Arpit",
      "lastName": "Mittal",
      "dept": "QA",
      "city": "Bangalore",
      "eMail": "arpit.mittal@gmail.com"
    }
  ]

  editEmpClick;
  employee;

  editEmp(emp): void {    
    this.editEmpClick = !this.editEmpClick;
    this.employee = emp;
    console.log(this.employee);
  }

  updateEmp(): void {
    console.log(this.employee);
    this.editEmpClick = !this.editEmpClick;
  }
}