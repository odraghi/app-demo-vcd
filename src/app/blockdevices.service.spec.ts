import { TestBed } from '@angular/core/testing';

import { BlockdevicesService } from './blockdevices.service';

describe('BlockdevicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockdevicesService = TestBed.get(BlockdevicesService);
    expect(service).toBeTruthy();
  });
});
