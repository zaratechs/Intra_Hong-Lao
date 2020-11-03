import { Personne } from "./personne";

export class Enseignant extends Personne{

    diplome: string;
    indice: number;

    constructor(){
        super();
        this.nom = undefined;
        this.prenom = undefined;
        this.telephone = undefined;
        this.email = undefined;
        this.diplome = undefined;
        this.indice = undefined;
    }
    
}