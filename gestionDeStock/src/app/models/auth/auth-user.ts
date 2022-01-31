import { DateUtils } from "src/app/utils/date.utils";
import { Adresse } from "../adresse";

export class AuthUser{
    id: number;
    createdAt: Date;
    dateNaissance: Date;
    email: string;
    exp: number;
    iat: number;
    nom: string;
    prenom : string;
    role : string;
    telephone : string;
    updatedAt : Date;
    adresse : Adresse

    constructor(data : any ){
        this.id = data.id;
        this.createdAt = data.createdAt;
        this.dateNaissance = data.dateNaissance;
        this.email = data.email;
        this.exp = data.exp;
        this.iat = data.iat;
        this.nom = data.nom;
        this.prenom = data.prenom;
        this.role = data.role;
        this.telephone = data.telephone;
        this.updatedAt = data.updatedAt;
        this.adresse = data.adresse;
       
       
    }
}