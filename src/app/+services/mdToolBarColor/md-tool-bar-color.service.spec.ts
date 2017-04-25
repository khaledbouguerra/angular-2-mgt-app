import { TestBed, inject } from '@angular/core/testing';

import { MdToolBarColorService } from './md-tool-bar-color.service';

describe('MdToolBarColorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MdToolBarColorService]
    });
  });

  it('should ...', inject([MdToolBarColorService], (service: MdToolBarColorService) => {
    expect(service).toBeTruthy();
  }));
});
