import { TestBed, inject } from '@angular/core/testing';

import { NgMatIconsService } from './ng-mat-icons.service';

describe('NgMatIconsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgMatIconsService],
    });
  });

  it('should be created', inject(
    [NgMatIconsService],
    (service: NgMatIconsService) => {
      expect(service).toBeTruthy();
    }
  ));
});
