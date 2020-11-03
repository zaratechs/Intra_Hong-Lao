import { Enseignant } from "./enseignant";
import { Cours } from "./cours";

export class EnseignantCours{

    id:number;
    diplome: string;
    numCours: string;

    constructor(enseignant: Enseignant, cours: Cours){
        this.id = undefined;
        this.diplome = enseignant.diplome;
        this.numCours = cours.numCours;
    }
}