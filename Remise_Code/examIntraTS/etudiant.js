"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Etudiant = void 0;
var personne_1 = require("./personne");
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant() {
        var _this = _super.call(this) || this;
        _this.nom = undefined;
        _this.prenom = undefined;
        _this.telephone = undefined;
        _this.email = undefined;
        _this.techniques = undefined;
        _this.note = undefined;
        return _this;
    }
    return Etudiant;
}(personne_1.Personne));
exports.Etudiant = Etudiant;
