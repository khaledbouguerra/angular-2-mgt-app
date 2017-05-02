import { async, ComponentFixture, TestBed ,inject} from '@angular/core/testing';
import {MdToolBarColorService} from '../../+services/mdToolBarColor/md-tool-bar-color.service'
import { AboutPageComponent } from './about-page.component';
import {RouterTestingModule} from '@angular/router/testing';
describe('AboutPageComponent', () => {
  let component: AboutPageComponent;
  let fixture: ComponentFixture<AboutPageComponent>;
let serviceMock:any;
  beforeEach(async(() => {
serviceMock={
  setColor: jasmine.createSpy('setColor'),
  getColor: jasmine.createSpy('getColor')
};
    TestBed.configureTestingModule({
      declarations: [ AboutPageComponent ],
      providers:[ {provide:MdToolBarColorService,useValue:serviceMock}],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create the compoenent and change the color of the MDToolBar', () => {
    let color='accent';
    expect(component).toBeTruthy();
    component.ngOnInit();
    fixture.detectChanges();
    expect(serviceMock.setColor).toHaveBeenCalledWith('accent');
  });
});
