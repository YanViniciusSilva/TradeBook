/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AnnouncesService } from './Announces.service';

describe('Service: Announces', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnnouncesService]
    });
  });

  it('should ...', inject([AnnouncesService], (service: AnnouncesService) => {
    expect(service).toBeTruthy();
  }));
});
