import { TestBed } from '@angular/core/testing';

import { Dados2Service } from './dados2.service';

describe('Dados2Service', () => {
  let service: Dados2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dados2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
