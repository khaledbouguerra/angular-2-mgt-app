import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {EmployeesService} from '../../+services/employees.service';
import { AddEmployeeComponent } from './add-employee.component';
import {RouterTestingModule} from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import {MaterialModule} from '@angular/material';

describe('AddEmployeeComponent', () => {
  let component: AddEmployeeComponent;
  let fixture: ComponentFixture<AddEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeComponent ],
      providers:[EmployeesService],
      imports:[RouterTestingModule,FormsModule,MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
