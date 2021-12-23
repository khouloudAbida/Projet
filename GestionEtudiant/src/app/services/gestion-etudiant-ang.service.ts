import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiant } from '../etudiant';

@Injectable({
  providedIn: 'root'
})
export class GestionEtudiantAngService {
  etudiant: Etudiant = new Etudiant("", "", "", "", 0, "");

  constructor(private http: HttpClient) { }

  public ajoutEtudiant(etudiant: Etudiant) {
    return this.http.post("http://localhost:8099/etudiant/save", etudiant, { responseType: "text" as "json" });
  }


  public getEtudiant() {
    return this.http.get("http://localhost:8099/etudiant/all");

  }


}
