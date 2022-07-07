import { TestBed } from '@angular/core/testing';

import { PostofficeService } from './postoffice.service';

describe('PostofficeService', () => {
  let service: PostofficeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostofficeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
