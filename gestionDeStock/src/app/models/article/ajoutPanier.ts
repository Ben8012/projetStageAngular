export class AjoutPanier{

    articleId : number;
    clientId? : number;
    preparateurId? : number;
    fournisseurId? : number;
    adminId? : number
    quantite : number

    constructor(data : any ){
        this.articleId = data.articleId;
        this.clientId = data.clientId;
        this.preparateurId = data.preparateurId;
        this.fournisseurId = data.fournisseurId;
        this.adminId = data.adminId,
        this.quantite = data.quantite
    }
}