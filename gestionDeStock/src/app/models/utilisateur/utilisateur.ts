import { Adresse } from "../adresse/adresse";

export class Utilisateur{
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
    dateNaissance: Date;
    email: string;
    passwd: string;
    role: string
    rue: string;
    numero: number;
    codePostal: number;
    ville: string;
    pays: string;
    societe : string

    constructor(data : any ){
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.telephone = data.telephone;
        this.dateNaissance = data.dateNaissance;
        this.email = data.email;
        this.passwd = data.passwd;
        this.role = data.role;
        this.rue = data.rue;
        this.numero = data.numero;
        this.codePostal = data.codePostal;
        this.ville = data.ville;
        this.pays = data.rue;
        this.societe = data.societe
    }
}





