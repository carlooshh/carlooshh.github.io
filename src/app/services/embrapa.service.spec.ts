import { TestBed } from '@angular/core/testing';

import { EmbrapaService } from './embrapa.service';

describe('EmbrapaService', () => {
  let service: EmbrapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmbrapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
