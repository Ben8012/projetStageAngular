export class AuthUser{
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

    constructor(data : any ){
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
       
       
    }
}