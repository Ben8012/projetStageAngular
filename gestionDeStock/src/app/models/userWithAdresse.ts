import { Adresse } from "./adresse";

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
    adresse : Adresse

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
        this.adresse = data.adresse;
      
    }
}

