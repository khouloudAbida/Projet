import { TestBed } from '@angular/core/testing';

import { GestionEtudiantAngService } from './gestion-etudiant-ang.service';

describe('GestionEtudiantAngService', () => {
  let service: GestionEtudiantAngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEtudiantAngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
