import { Cours } from "./cours";

export class Note{
    valeur: number;
    cours: Cours;

    constructor(){
        this.valeur = undefined;
        this.cours = undefined;
    }
}