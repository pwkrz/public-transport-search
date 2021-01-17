import { TestBed } from '@angular/core/testing';

import { PlaceSelectorService } from './place-selector.service';

describe('PlaceSelectorService', () => {
  let service: PlaceSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaceSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
