import { TestBed, inject } from '@angular/core/testing';

import { PerfilService } from './perfil.service';

describe('PerfilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerfilService]
    });
  });

  it('should ...', inject([PerfilService], (service: PerfilService) => {
    expect(service).toBeTruthy();
  }));
});