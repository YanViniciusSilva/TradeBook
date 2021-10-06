/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BookAnnouncesService } from './BookAnnounces.service';

describe('Service: BookAnnounces', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookAnnouncesService]
    });
  });

  it('should ...', inject([BookAnnouncesService], (service: BookAnnouncesService) => {
    expect(service).toBeTruthy();
  }));
});
