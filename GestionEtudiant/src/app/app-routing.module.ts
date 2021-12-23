import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';

import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';

const routes: Routes = [

  {
    path: "list-etudiants", component: ListEtudiantsComponent
  },
  {
    path: "ajout-etudiant", component: AjoutEtudiantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
