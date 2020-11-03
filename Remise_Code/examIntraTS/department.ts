import { Enseignant } from "./enseignant";

export class Department{

    code: number;
    nom: string;
    enseignant: Enseignant;

    constructor(){
        this.code = undefined;
        this.nom = undefined;
        this.enseignant = undefined;
    }
}