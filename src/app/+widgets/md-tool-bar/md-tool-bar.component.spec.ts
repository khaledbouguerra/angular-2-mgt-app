import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdToolBarComponent } from './md-tool-bar.component';

describe('MdToolBarComponent', () => {
  let component: MdToolBarComponent;
  let fixture: ComponentFixture<MdToolBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdToolBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdToolBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
