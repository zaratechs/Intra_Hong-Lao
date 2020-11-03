import { Personne } from "./personne";
import { Department } from "./department";
import { Enseignant } from "./enseignant";
import { Etudiant } from "./etudiant";
import { Classe } from "./classe";
import { Cours } from "./cours";
import { Note } from "./note";
import { EnseignantCours } from "./enseignantCours";


const faker = require('faker');
const fs = require('fs');
const MAX_INSTANCE = 3;


function generateRandomJsonFile() {
    let tab = new Array();

    for (let index = 0; index < MAX_INSTANCE; index++) {

        let department = new Department();
        let personne = new Personne();
        let enseignant = new Enseignant();
        let etudiant = new Etudiant();
        let classe = new Classe();
        let cours = new Cours();
        let note = new Note();
        let enseignantCours: EnseignantCours;


        department.code = faker.random.number();
        department.nom = faker.company.companyName();
        department.enseignant = undefined;
        tab.push(department);

        personne.nom = faker.name.lastName();
        personne.prenom = faker.name.firstName();
        personne.telephone = faker.phone.phoneNumber();
        personne.email = faker.internet.email();
        tab.push(personne);

        classe.numClasse = faker.random.alphaNumeric();
        classe.capacite = faker.random.number();
        classe.cours = faker.name.jobTitle();
        tab.push(classe);

        etudiant.nom = faker.name.lastName();
        etudiant.prenom = faker.name.firstName();
        etudiant.telephone = faker.phone.phoneNumber();
        etudiant.email = faker.internet.email();
        etudiant.techniques = faker.name.jobTitle();
        tab.push(etudiant);

        enseignant.nom = faker.name.lastName();
        enseignant.prenom = faker.name.firstName();
        enseignant.telephone = faker.phone.phoneNumber();
        enseignant.email = faker.internet.email();
        enseignant.diplome = faker.name.jobTitle();
        enseignant.indice = faker.random.number();
        tab.push(enseignant);

        note.valeur = faker.random.number();
        note.cours = faker.random.number();
        // Array TO-DO
        tab.push(note);

        cours.numCours = faker.random.number();
        cours.titreCours = faker.name.jobTitle();
        tab.push(cours);

        enseignantCours = new EnseignantCours(enseignant, cours)
        enseignantCours.id = index;
        enseignantCours.diplome = enseignant.diplome + index;
        enseignantCours.numCours = cours.numCours;
        tab.push(enseignantCours);
    }
    return { "restExamIntraObject": tab };
}

let webService = generateRandomJsonFile();
fs.writeFileSync("../database/examIntra.json", JSON.stringify(webService, null, '\t'));