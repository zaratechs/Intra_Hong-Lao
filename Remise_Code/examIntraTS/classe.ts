import { Cours } from "./cours";


export class Classe{
    numClasse: string;
    capacite: number;
    cours: Array<Cours>;

    constructor(){
        this.numClasse = undefined;
        this.capacite = undefined;
        this.cours = undefined;
    }
}