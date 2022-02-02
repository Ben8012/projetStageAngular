import { Adresse } from "../adresse/adresse";

export class UserWithAdresse{
    id: number;
    nom: string;
    prenom: string;
    telephone: string;
    dateNaissance: Date;
    email: string;
    role: string;
    createdAt:Date;
    updatedAt : Date;
    deletedAt : Date;
    adresse : Adresse
    societe :string


    constructor(data : any ){
        this.id = data.id;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.telephone = data.telephone;
        this.dateNaissance = data.dateNaissance;
        this.email = data.email;
        this.role = data.role;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.deletedAt = data.deletedAt;
        this.adresse = data.adresse;
        this.societe = data.societe;
      
    }
}

