"use strict";
exports.__esModule = true;
exports.EnseignantCours = void 0;
var EnseignantCours = /** @class */ (function () {
    function EnseignantCours(enseignant, cours) {
        this.id = undefined;
        this.diplome = enseignant.diplome;
        this.numCours = cours.numCours;
    }
    return EnseignantCours;
}());
exports.EnseignantCours = EnseignantCours;
