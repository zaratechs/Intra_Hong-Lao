import { Personne } from "./personne";
import { Note } from "./note";

export class Etudiant extends Personne{
    
    techniques: string;
    note: Array<Note>

    constructor(){
        super();
        this.nom = undefined;
        this.prenom = undefined;
        this.telephone = undefined;
        this.email = undefined;
        this.techniques = undefined;
        this.note = undefined;
    }
}