/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SejourService } from './sejour.service';

describe('SejourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SejourService]
    });
  });

  it('should ...', inject([SejourService], (service: SejourService) => {
    expect(service).toBeTruthy();
  }));
});
