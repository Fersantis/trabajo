import { TestBed } from '@angular/core/testing';

import { PagePortegidoGuard } from './page-portegido.guard';

describe('PagePortegidoGuard', () => {
  let guard: PagePortegidoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PagePortegidoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
