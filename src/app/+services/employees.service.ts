import { Injectable } from '@angular/core';
import {Employee} from '../+data/employee'
import {MOCK_DATA} from '../+mock-data/mock-data'

@Injectable()
export class EmployeesService {
 NEW_ID:number=16;
 data=MOCK_DATA;
  constructor() { }
getEmployees():Promise<any>{
  
  return Promise.resolve(this.data)
}
getEmployee(id):Promise<Employee>{
  
return Promise.resolve(this.data)
.then(employee=>employee.filter(employee=>employee.id==id)[0])
}
addEmployee(employee:Employee):Promise<any>{
  let date=new Date();
  let year = date.getFullYear();
  let month =date.getMonth()+1;
  let day= date.getDate()
  
  if(!employee.createDate){
    employee.createDate=month+'/'+day+'/'+year;
    return Promise.resolve(this.data)
    .then(function(employees){
      employees.push(employee)
    })
  }
}
removeEmployee(employee:Employee){
let index = this.data.indexOf(employee)
return Promise.resolve(this.data)
.then(employees=>employees.splice(index,1));
}

}
