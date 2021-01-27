import { Component } from '@angular/core';
import { Employee } from './employee.model';

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
      "eMail": "abhilash.mishra.10@gmail.com",
      "sal": 400000,
      "dob": '1996/10/15'
    },
    {
      "empId": 154,
      "firstName": "Abhinav Pranjal",
      "lastName": "Rai",
      "dept": "DevOps",
      "city": "Noida",
      "eMail": "rai.abhinav95@gmail.com",
      "sal": 600000,
      "dob": '1995/05/23'
    },
    {
      "empId": 174,
      "firstName": "G. Sravan",
      "lastName": "Kumar",
      "dept": "R&D",
      "city": "Bangalore",
      "eMail": "g.sraven.96@gmail.com",
      "sal": 500000,
      "dob": '1996/07/03'
    },
    {
      "empId": 220,
      "firstName": "Arpit",
      "lastName": "Mittal",
      "dept": "QA",
      "city": "Bangalore",
      "eMail": "arpit.mittal@gmail.com",
      "sal": 750000,
      "dob": '1996/10/31'
    }
  ]

  editEmpClick;
  employee;

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