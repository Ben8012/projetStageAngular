export class Article{

    id : number;
    codeArticle : string;
    designation: string;
    urlImage: string;
    prixHTVA: number;
    prixTTC: number;
    tauxTVA: number;
    categorieID: number;

    constructor(data : any ){
        this.id = data.id;
        this.codeArticle = data.codeArticle;
        this.designation = data.designation;
        this.urlImage = data.urlImage;
        this.prixHTVA = data.prixHTVA;
        this.prixTTC = data.prixTTC;
        this.tauxTVA = data.tauxTVA;
        this.categorieID = data.categorieID;
    }
}