import { TestBed, inject } from '@angular/core/testing';

import { MdToolBarColorService } from './md-tool-bar-color.service';

describe('MdToolBarColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdToolBarColorService]
    });
  });

  it('should set new color', inject([MdToolBarColorService], (service: MdToolBarColorService) => {
    let color='green';
    service.setColor(color);
    expect(service._color).toBe('green')
   
  }));
  it('should get the color',inject([MdToolBarColorService],(service:MdToolBarColorService)=>{
    let color='green';
    service.setColor(color);
    expect(service.getColor()).toBe(color);
  }))
});
