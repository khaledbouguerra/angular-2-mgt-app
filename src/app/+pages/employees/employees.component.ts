import { Component, OnInit } from '@angular/core';
import {Employee} from '../../+data/employee';
import {EmployeesService} from '../../+services/employees.service';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

employees:Employee[];
  constructor(private router:Router,private employeesService:EmployeesService,private title:Title ) { }

  ngOnInit() {
    this.title.setTitle('Employés')
  this.getEmplyees();
  }
  getEmplyees(){
    console.log('getting employees');
   this.employeesService.getEmployees()
   .then(employees=>{
     this.employees=employees;
     console.log('these are the employees', this.employees);
    });
  }
  DeleteEmployee(employee:Employee){
    console.log('we are deleting this employee', employee);
    this.employeesService.removeEmployee(employee);
   
  }
  goToEdit(id:number){
    console.log('we are going to Edit');
    this.router.navigate(['/edit', id]);
  }
  goToAdd(){
   console.log('we are going to add employee page');
   this.router.navigate(['/add']);
  }

}
