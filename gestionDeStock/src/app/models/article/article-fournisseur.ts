import { UserWithAdresse } from "../utilisateur/userWithAdresse";
import { Utilisateur } from "../utilisateur/utilisateur";
import { Article } from "./article";

export class ArticleFournisseur{

   article : Article;
   fournisseur : UserWithAdresse

    constructor(data : any ){
        this.article = data.article;
        this.fournisseur = data.fournisseur;
      
    }
}