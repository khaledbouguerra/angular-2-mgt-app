import { TestBed, async,fakeAsync,ComponentFixture,inject,tick } from '@angular/core/testing';
import { DebugElement }    from '@angular/core';
import { AppComponent } from './app.component';
import {MdToolBarColorService} from './+services/mdToolBarColor/md-tool-bar-color.service';
import {Router} from '@angular/router';
import { By }  from '@angular/platform-browser';

describe('AppComponent', () => {
  let component:AppComponent;
   let fixture: ComponentFixture<AppComponent>;
  let de: DebugElement;
  let el:HTMLElement;
  let routerMock:any;
  let MdToolBarColorServiceMock:any;
  let serviceSpy:any;
  let routerSpy:any;
 
    beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de=fixture.debugElement.query(By.css('table tbody'));
    el=de.nativeElement;
    serviceSpy = TestBed.get(MdToolBarColorService);
    routerSpy=TestBed.get(Router);
    location = TestBed.get(Location);
  });
  beforeEach(async(() => {
     routerMock={
  navigate: jasmine.createSpy('navigate')
};
 MdToolBarColorServiceMock = {
            setColor: jasmine.createSpy('setColor'),
               
 
            getColor: jasmine.createSpy('getColor')
        };
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers:[
      {provide:MdToolBarColorService,useValue:MdToolBarColorService},
      {provide:Router,useValue:routerMock}
    ]
    }).compileComponents();
  }));
 



  it(`should call MdToolBarColorService and set the color of the MdToolBar`, async(() => {
 component.ngOnInit();
 let color='green';
 expect(serviceSpy.SetColor(color)).toHaveBeenCalled();
    fixture.whenStable()
    .then(()=>{
      let returnedColor=serviceSpy.getColor();
      expect(returnedColor).toBe(color);
      
    })
  }));
it('should navigate to produits page',fakeAsync(()=>{
 
  component.goToProducts();
tick(50);
 expect(routerSpy.navigate).toHaveBeenCalledWith(['produits'])


}))

});
