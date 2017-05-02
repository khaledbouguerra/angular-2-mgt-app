import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import {Router} from '@angular/router';
import { EmployeesComponent } from './employees.component';
import { DebugElement }    from '@angular/core';
import {EmployeesService} from '../../+services/employees.service';
import {MaterialModule} from '@angular/material';
describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let de: DebugElement;
  let el:HTMLElement;
  let routerMock:any;
  let employeeServiceMock:any;
  let serviceSpy:any;
  let routerSpy:any;

beforeEach(async(()=>{
  routerMock={
  navigate: jasmine.createSpy('navigate')
};

 employeeServiceMock = {
            getEmployees: jasmine.createSpy('getEmployees')
                .and.returnValue(Promise.resolve([{}, {}, {}])),
 
            removeEmployee: jasmine.createSpy('removeEmployee')
        };
  TestBed.configureTestingModule({
    declarations:[EmployeesComponent],
    imports:[MaterialModule ],
    providers:[
      {provide:EmployeesService,useValue:employeeServiceMock},
      {provide:Router,useValue:routerMock}
    ]
  })
  .compileComponents();
}))




  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement.query(By.css('table tbody'));
   
    serviceSpy = TestBed.get(EmployeesService);
    routerSpy=TestBed.get(Router);
  });

  
  
  it('should fetch the employee list on init',() =>{
  component.ngOnInit();
  expect(serviceSpy.getEmployees).toHaveBeenCalled();
  fixture.detectChanges();
  
  fixture.whenStable()
  .then(()=>{
    fixture.detectChanges();
    expect(component.employees.length).toBe(3);
    expect(el.getElementsByTagName('tr').length).toBe(3);
  })
})
 it('should remove an employee',() =>{
   component.DeleteEmployee(null);
   
   expect(employeeServiceMock.removeEmployee).toHaveBeenCalledTimes(1);
  
  })
  it('should navigate to edit page',async(()=>{
    component.goToEdit(55);
    fixture.whenStable()
    .then(()=>expect(routerMock.navigate).toHaveBeenCalledWith(['/edit',55]))

  }))
  it('shoud navigate to add new employee page',async(()=>{
    component.goToAdd();
    fixture.whenStable()
    .then(()=>expect(routerMock.navigate).toHaveBeenCalledWith(['/add']));
    
  }))
});
