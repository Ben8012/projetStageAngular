import { Adresse } from "../adresse/adresse";

export class Stock{

    id : number;
    adresse : Adresse;
    codeStock: string;
    quantite: number;
    updatedAt: Date;
    createdAt: Date;
    deletedAt: Date;
   

    constructor(data : any ){
        this.id = data.id;
        this.adresse = data.adresse;
        this.codeStock = data.codeStock;
        this.quantite = data.quantite;
        this.updatedAt = data.updatedAt;
        this.createdAt = data.createdAt;
        this.deletedAt = data.deletedAt;
       
    }
}
