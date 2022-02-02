import { Article } from "../article/article";
import { UserWithAdresse } from "../utilisateur/userWithAdresse";
import { Utilisateur } from "../utilisateur/utilisateur";

export class Commande{

    id : number;
    admin : UserWithAdresse;
    adminId: number;
    article: Article;
    articleId : number;
    client : UserWithAdresse;
    clientId :number;
    createdAt : Date;
    deletedAt : Date;
    updatedAt : Date;
    fournisseur : UserWithAdresse;
    fournisseurId : number;
    preparateur : UserWithAdresse;
    preparateurId :number;
    quantite : number
    status : string

    constructor(data : any ){
        this.id = data.id;
        this.admin = data.admin;
        this.adminId = data.adminId;
        this.article = data.article;
        this.articleId = data.articleId;
        this.admin = data.admin;
        this.client = data.client;
        this.clientId = data.clientId;
        this.createdAt = data.createdAt;
        this.deletedAt = data.deletedAt;
        this.updatedAt = data.updatedAt;
        this.fournisseur = data.fournisseur;
        this.fournisseurId = data.fournisseurId;
        this.preparateur = data.preparateur;
        this.preparateurId = data.preparateurId;
        this.quantite = data.quantite;
        this.status = data.status;
    }
}