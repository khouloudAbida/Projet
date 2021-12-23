import { Component, OnInit } from '@angular/core';
import { GestionEtudiantAngService } from '../services/gestion-etudiant-ang.service';

@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.scss']
})
export class ListEtudiantsComponent implements OnInit {
  etudiant: any;
  constructor(private service: GestionEtudiantAngService) { }

  ngOnInit() {
    let response = this.service.getEtudiant();
    response.subscribe(data => this.etudiant = data);
  }

}
