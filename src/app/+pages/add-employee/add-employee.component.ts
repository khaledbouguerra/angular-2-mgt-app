import { Component, OnInit } from '@angular/core';
import {Employee} from '../../+data/employee';
import {EmployeesService} from '../../+services/employees.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit { 
  newEmployee:Employee;
  constructor(
    private router:Router,
    private employeesServie:EmployeesService
  ) { }

  ngOnInit() {
    this.newEmployee=new Employee();
  }
saveEmployee(event){
  this.employeesServie.addEmployee(this.newEmployee)
  .then(result=>{
    console.log(result);
    this.router.navigate(['/employees']);
  })
}
cancelAdd(event){
  this.router.navigate(['/employees']);
}
}
