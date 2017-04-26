import { TestBed, inject } from '@angular/core/testing';

import { EmployeesService } from './employees.service';
import {Employee} from '../+data/employee'

describe('EmployeesService tests', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeesService]
    });
  });

  it('should return a list of employees', inject([EmployeesService], (service: EmployeesService) => {
    service.getEmployees()
    .then(employees=>{
      expect(employees.length).toBeDefined();
      expect(employees.length).toBe(3);
    })
  }));
it('shoul return a single employee by id',inject([EmployeesService], (service: EmployeesService)=>{
  let employeeTestingFunction=(employee:Employee)=>{
    expect(employee).toBeDefined();
    expect(employee.firstName).toBe('khaled');
    expect(employee.lastName).toBe('bouguerra');
  }
  service.getEmployee(2)
  .then(employeeTestingFunction);
 
}));
it('should add a new employee', inject([EmployeesService], (service:EmployeesService)=>{
let newEmployee:Employee=new Employee();
newEmployee.id=10;
newEmployee.firstName='khaled';
newEmployee.lastName='bouguerra';
let testEmployee=(employee:Employee)=>{
  expect(employee).toBeDefined();
  expect(employee.firstName).toBe('khaled');
  expect(employee.lastName).toBe('bouguerra');
  expect(employee.id).toBe(10);
};
service.addEmployee(newEmployee)
.then(()=>{
  service.getEmployee(10)
  .then(testEmployee)
})

}));
it('should remove an employee',inject([EmployeesService],(service:EmployeesService)=>{
  let length;
  service.getEmployees()
  .then(employees=>length=employees.length);
  let newEmployee:Employee=new Employee();
  newEmployee.id=100;
  newEmployee.lastName='bouguerra';
  newEmployee.phone='+216000000'
  newEmployee.email='test@test.com'
  newEmployee.firstName='khaled';
  let testingFunction=(employees:Array<Employee>,len:number)=>{
    expect(employees.length).toBeLessThan(len);
    expect(employees.length).toBe(len-1);
  }
service.removeEmployee(newEmployee)
.then(()=>service.getEmployees()
.then(emplyees=>{
  testingFunction(emplyees,length);
})


)

 
}))
})