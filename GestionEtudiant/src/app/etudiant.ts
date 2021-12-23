export class Etudiant {

    matricule!: string;
    nom!: string;
    prenom!: string;
    etatCivil!: string;
    age!: number;
    tel!: string;

    constructor(
        matricule: string,
        nom: string,
        prenom: string,
        etatCivil: string,
        age: number,
        tel: string
    ) { }
}