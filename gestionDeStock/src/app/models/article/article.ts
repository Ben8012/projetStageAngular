import { Categorie } from "../categorie/categories";
import { Stock } from "../stock/stock";

export class Article{

    id : number;
    codeArticle : string;
    designation: string;
    urlImage: Blob;
    prixHTVA: number;
    prixTTC: number;
    tauxTVA: number;
    categorieId: number;
    categorie : Categorie
    stock : Stock

    constructor(data : any ){
        this.id = data.id;
        this.codeArticle = data.codeArticle;
        this.designation = data.designation;
        this.urlImage = data.urlImage;
        this.prixHTVA = data.prixHTVA;
        this.prixTTC = data.prixTTC;
        this.tauxTVA = data.tauxTVA;
        this.categorieId = data.categorieId;
        this.categorie = data.categorie
        this.stock = data.stock
    }
}