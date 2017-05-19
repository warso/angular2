"use strict";
var Sejour = (function () {
    function Sejour(_nom, _prix) {
        this._nom = _nom;
        this._prix = _prix;
    }
    Sejour.prototype.getNom = function () {
        return this._nom;
    };
    Sejour.prototype.getPrix = function () {
        return this._prix;
    };
    return Sejour;
}());
var SejourService = (function () {
    function SejourService(_sejour) {
        this._sejour = _sejour;
        this._sejour = [new Sejour("Lille", 150), new Sejour("Nantes", 200)];
    }
    SejourService.prototype.rechercheParNom = function (nom) {
        return this._sejour.filter(function (t) { return t.getom == nom; });
    };
    return SejourService;
}());
