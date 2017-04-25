import { Component, OnInit,OnDestroy  } from '@angular/core';
import {Employee} from '../../+data/employee';
import {EmployeesService} from '../../+services/employees.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
sub:any;
id:number;
getedEmployee:Employee;
  constructor(
    private _router:Router,
    private empoyeesServie:EmployeesService,
    private router:ActivatedRoute,
    private title:Title,
  ) { }

  ngOnInit() {
    this.title.setTitle('editer employee')
    this.getedEmployee=new Employee();
    this.sub=this.router.params
    .subscribe(params=>{
    this.id=params['id'];
    console.log('this is the id',this.id);
    this.empoyeesServie.getEmployee(this.id)
    .then(employee=>{
      console.log('this is the employee', employee);
      this.getedEmployee=employee;

    })
    })
    
  }
  ngOnDistroy(){
this.sub.unsubscribe()
  }
  saveEmployee(){
    console.log('saving the edited employee');
    Employee[this.id]=this.getedEmployee;
    console.log(this.getedEmployee);
    this._router.navigate(['employees'])

  }
  cancelAdd(){
    console.log('canceling removing the employee');
    this._router.navigate(['employees']);
  }

}
