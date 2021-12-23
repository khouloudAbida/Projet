import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { GestionEtudiantAngService } from '../services/gestion-etudiant-ang.service';

@Component({
  selector: 'app-ajout-etudiant',
  templateUrl: './ajout-etudiant.component.html',
  styleUrls: ['./ajout-etudiant.component.scss']
})
export class AjoutEtudiantComponent implements OnInit {

  etudiant: Etudiant = new Etudiant("", "", "", "", 0, "");
  message: any;
  constructor(private service: GestionEtudiantAngService) { }

  ngOnInit(): void {
  }
  public EtudiantNew() {
    let response = this.service.ajoutEtudiant(this.etudiant);
    response.subscribe(data => {
      this.message = data;
    })
  }
}
