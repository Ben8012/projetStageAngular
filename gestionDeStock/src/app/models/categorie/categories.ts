export class Categorie{

    id : number;
    nom : string;
    description: string;
    codeCategorie: string;
   

    constructor(data : any ){
        this.id = data.id;
        this.nom = data.nom;
        this.description = data.description;
        this.codeCategorie = data.urlImage;
    }
}