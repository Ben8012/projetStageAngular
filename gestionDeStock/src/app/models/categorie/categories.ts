export class Categorie{

    id : number;
    nom : string;
    description: string;
    codeCategorie: string;
    createdAt: Date;
    updatedAt:Date;
    deletedAt :Date

    constructor(data : any ){
        this.id = data.id;
        this.nom = data.nom;
        this.description = data.description;
        this.codeCategorie = data.codeCategorie;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
        this.deletedAt = data.deletedAt;
    }
}