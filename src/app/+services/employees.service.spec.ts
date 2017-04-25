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

})