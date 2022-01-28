export class Adresse{
    id: number;
    rue: string;
    numero: number;
    codePostal: number;
    ville: string;
    pays: string;

    constructor(data : any ){
        this.id = data.id;
        this.rue = data.rue;
        this.numero = data.numero;
        this.codePostal = data.codePostal;
        this.ville = data.ville;
        this.pays = data.pays;
       
    }
}

