import { TestBed } from '@angular/core/testing';

import { PlayersStorageService } from './players-storage.service';

describe('PlayersStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayersStorageService = TestBed.get(PlayersStorageService);
    expect(service).toBeTruthy();
  });
});
