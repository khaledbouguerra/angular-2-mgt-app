import { TestBed, async,fakeAsync,ComponentFixture,inject,tick} from '@angular/core/testing';
import {
    RouterTestingModule
} from '@angular/router/testing';
import { MdToolBarComponent } from './+widgets/md-tool-bar/md-tool-bar.component'
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';
import {MdToolBarColorService} from './+services/mdToolBarColor/md-tool-bar-color.service';
import {Router} from '@angular/router';
import { By }  from '@angular/platform-browser';
import {MaterialModule} from '@angular/material';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
    let serviceMock:any;
    let routerMock:any;
  beforeEach(async(() => {
 serviceMock={
  setColor: jasmine.createSpy('setColor'),
  getColor: jasmine.createSpy('getColor')
};
routerMock={
  navigate:jasmine.createSpy('navigate')
}
 
    TestBed.configureTestingModule({
      declarations: [AppComponent,MdToolBarComponent],
      imports:[MaterialModule,RouterTestingModule ],
      providers:[{provide:MdToolBarColorService,useValue:serviceMock},
      {provide:Router,useValue:routerMock}]
    }).compileComponents()
  }));
 beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });



  it(`should call MdToolBarColorService and set the color of the MdToolBar`, () => {
  
      expect(component).toBeTruthy();
      component.ngOnInit();
      fixture.detectChanges();
      expect(serviceMock.setColor).toHaveBeenCalledWith('primary');
   
      
  
  });
it('should navigate to produits page',fakeAsync(()=>{
 
 expect(component).toBeTruthy();
component.ngOnInit();
fixture.detectChanges();
component.goToProducts();
tick();
expect(routerMock.navigate).toHaveBeenCalledWith(['produits'])

}))
it('should navigate to employees page',fakeAsync(()=>{
 
 expect(component).toBeTruthy();
component.ngOnInit();
fixture.detectChanges();
component.goToEmployees();
tick();
expect(routerMock.navigate).toHaveBeenCalledWith(['employees'])

}))
it('should navigate to about page',fakeAsync(()=>{
 
 expect(component).toBeTruthy();
component.ngOnInit();
fixture.detectChanges();
component.goToAbout();
tick();
expect(routerMock.navigate).toHaveBeenCalledWith(['about'])

}))
it('should navigate to home page',fakeAsync(()=>{
 
 expect(component).toBeTruthy();
component.ngOnInit();
fixture.detectChanges();
component.goHome();
tick();
expect(routerMock.navigate).toHaveBeenCalledWith(['home'])

}))
});
