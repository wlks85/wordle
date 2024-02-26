var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./entites/sauvegardePartie", "./entites/sauvegardeStats", "./lienHelper", "./notificationMessage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var sauvegardePartie_1 = __importDefault(require("./entites/sauvegardePartie"));
    var sauvegardeStats_1 = __importDefault(require("./entites/sauvegardeStats"));
    var lienHelper_1 = __importDefault(require("./lienHelper"));
    var notificationMessage_1 = __importDefault(require("./notificationMessage"));
    var Sauvegardeur = /** @class */ (function () {
        function Sauvegardeur() {
        }
        Sauvegardeur.sauvegarderStats = function (stats) {
            localStorage.setItem(this._cleStats, JSON.stringify(stats));
        };
        Sauvegardeur.chargerSauvegardeStats = function () {
            var contenuLocation = lienHelper_1.default.extraireInformation("s");
            if (contenuLocation) {
                var donneesDepuisLien = Sauvegardeur.chargerInformationDepuisLien(contenuLocation);
                window.location.hash = "";
                if (donneesDepuisLien) {
                    notificationMessage_1.default.ajouterNotification("Statistiques chargés avec succès.");
                    Sauvegardeur.sauvegarderStats(donneesDepuisLien);
                    return donneesDepuisLien;
                }
                notificationMessage_1.default.ajouterNotification("Impossible de charger les statistiques depuis le lien.");
            }
            var dataStats = localStorage.getItem(this._cleStats);
            if (!dataStats)
                return;
            var stats = JSON.parse(dataStats);
            if (stats.dernierePartie !== null)
                stats.dernierePartie = new Date(stats.dernierePartie);
            return stats;
        };
        Sauvegardeur.sauvegarderPartieEnCours = function (idPartie, datePartie, propositions, dateFinPartie) {
            var partieEnCours = {
                propositions: propositions,
                datePartie: datePartie,
                dateFinPartie: dateFinPartie,
                idPartie: idPartie,
            };
            localStorage.setItem(this._clePartieEnCours, JSON.stringify(partieEnCours));
        };
        Sauvegardeur.chargerSauvegardePartieEnCours = function () {
            var aujourdhui = new Date();
            var partieEnCours;
            var datePartieEnCours;
            var dataPartieEnCours = localStorage.getItem(this._clePartieEnCours);
            if (!dataPartieEnCours) {
                // On regarde si par hasard, on n'a pas la partie du jour dans les infos de la veille
                var partieVeille = this.getInfoVeille();
                if (partieVeille &&
                    aujourdhui.getDate() === partieVeille.datePartie.getDate() &&
                    aujourdhui.getMonth() === partieVeille.datePartie.getMonth() &&
                    aujourdhui.getFullYear() === partieVeille.datePartie.getFullYear()) {
                    partieEnCours = partieVeille;
                    datePartieEnCours = partieVeille.datePartie;
                    localStorage.removeItem(this._clePartieVeille);
                }
                else {
                    return;
                }
            }
            else {
                partieEnCours = JSON.parse(dataPartieEnCours);
                datePartieEnCours = new Date(partieEnCours.datePartie);
                if (aujourdhui.getDate() !== datePartieEnCours.getDate() ||
                    aujourdhui.getMonth() !== datePartieEnCours.getMonth() ||
                    aujourdhui.getFullYear() !== datePartieEnCours.getFullYear()) {
                    // On regarde si par hasard, on n'a pas la partie du jour dans les infos de la veille
                    var partieVeille = this.getInfoVeille();
                    if (partieVeille &&
                        aujourdhui.getDate() === partieVeille.datePartie.getDate() &&
                        aujourdhui.getMonth() === partieVeille.datePartie.getMonth() &&
                        aujourdhui.getFullYear() === partieVeille.datePartie.getFullYear()) {
                        partieEnCours = partieVeille;
                        datePartieEnCours = partieVeille.datePartie;
                        // Et on inverse les données
                        localStorage.setItem(this._clePartieVeille, dataPartieEnCours);
                    }
                    else {
                        localStorage.setItem(this._clePartieVeille, dataPartieEnCours);
                        localStorage.removeItem(this._clePartieEnCours);
                        return;
                    }
                }
            }
            var dateFinPartie = partieEnCours.dateFinPartie === undefined ? undefined : new Date(partieEnCours.dateFinPartie);
            return {
                datePartie: datePartieEnCours,
                dateFinPartie: dateFinPartie,
                propositions: partieEnCours.propositions,
                idPartie: partieEnCours.idPartie,
            };
        };
        Sauvegardeur.getInfoVeille = function () {
            var dataPartieVeille = localStorage.getItem(this._clePartieVeille);
            if (!dataPartieVeille)
                return undefined;
            var veille = new Date();
            veille.setDate(veille.getDate() - 1);
            var partieVeille = JSON.parse(dataPartieVeille);
            if (partieVeille.datePartie)
                partieVeille.datePartie = new Date(partieVeille.datePartie);
            if (partieVeille.dateFinPartie)
                partieVeille.dateFinPartie = new Date(partieVeille.dateFinPartie);
            return partieVeille;
        };
        Sauvegardeur.hasPartieVeilleNonTerminee = function () {
            var partieVeille = this.getInfoVeille();
            if (!partieVeille)
                return true;
            var aujourdhui = new Date();
            var veille = new Date();
            veille.setDate(veille.getDate() - 1);
            return ((aujourdhui.getDate() !== partieVeille.datePartie.getDate() && veille.getDate() !== partieVeille.datePartie.getDate()) ||
                (aujourdhui.getMonth() !== partieVeille.datePartie.getMonth() && veille.getMonth() !== partieVeille.datePartie.getMonth()) ||
                (aujourdhui.getFullYear() !== partieVeille.datePartie.getFullYear() && veille.getFullYear() !== partieVeille.datePartie.getFullYear()) ||
                !partieVeille.dateFinPartie);
        };
        Sauvegardeur.chargerPartieVeille = function () {
            var veille = new Date();
            veille.setDate(veille.getDate() - 1);
            var partieVeille = this.getInfosPartieVeille(veille);
            var dateFinPartie = partieVeille.dateFinPartie === undefined ? undefined : new Date(partieVeille.dateFinPartie);
            // On va sauvegarder la partie en cours dans la veille pour ne pas la perde
            var partieEnCours = localStorage.getItem(this._clePartieEnCours);
            if (partieEnCours) {
                localStorage.setItem(this._clePartieVeille, partieEnCours);
                localStorage.removeItem(this._clePartieEnCours);
            }
            return {
                datePartie: new Date(partieVeille.datePartie),
                dateFinPartie: dateFinPartie,
                propositions: partieVeille.propositions,
                idPartie: partieVeille.idPartie,
            };
        };
        Sauvegardeur.getInfosPartieVeille = function (veille) {
            var dataPartieVeille = localStorage.getItem(this._clePartieVeille);
            if (!dataPartieVeille) {
                var dataPartie = new sauvegardePartie_1.default();
                dataPartie.datePartie = veille;
                return dataPartie;
            }
            return JSON.parse(dataPartieVeille);
        };
        Sauvegardeur.sauvegarderConfig = function (config) {
            localStorage.setItem(this._cleConfiguration, JSON.stringify(config));
        };
        Sauvegardeur.chargerConfig = function () {
            var dataConfig = localStorage.getItem(this._cleConfiguration);
            if (!dataConfig)
                return null;
            var config = JSON.parse(dataConfig);
            return config;
        };
        Sauvegardeur.genererLien = function () {
            var _a;
            var stats = (_a = Sauvegardeur.chargerSauvegardeStats()) !== null && _a !== void 0 ? _a : sauvegardeStats_1.default.Default;
            return [
                stats.repartition[1],
                stats.repartition[2],
                stats.repartition[3],
                stats.repartition[4],
                stats.repartition[5],
                stats.repartition[6],
                stats.repartition["-"],
                stats.lettresRepartitions.bienPlace,
                stats.lettresRepartitions.malPlace,
                stats.lettresRepartitions.nonTrouve,
                stats.dernierePartie ? stats.dernierePartie.toISOString() : "null",
            ].join(",");
        };
        Sauvegardeur.chargerInformationDepuisLien = function (contenu) {
            var _a = contenu.split(","), UnCoupString = _a[0], DeuxCoupsString = _a[1], TroisCoupsString = _a[2], QuatreCoupsString = _a[3], CinqCoupsString = _a[4], SixCoupsString = _a[5], PerduString = _a[6], LettresBienPlaceesString = _a[7], LettresMalPlaceesString = _a[8], LettresNonTrouveString = _a[9], dernierePartie = _a[10];
            var UnCoup = parseInt(UnCoupString);
            var DeuxCoups = parseInt(DeuxCoupsString);
            var TroisCoups = parseInt(TroisCoupsString);
            var QuatreCoups = parseInt(QuatreCoupsString);
            var CinqCoups = parseInt(CinqCoupsString);
            var SixCoups = parseInt(SixCoupsString);
            var Perdu = parseInt(PerduString);
            var LettresBienPlacees = parseInt(LettresBienPlaceesString);
            var LettresMalPlacees = parseInt(LettresMalPlaceesString);
            var LettresNonTrouve = parseInt(LettresNonTrouveString);
            return {
                dernierePartie: dernierePartie === "null" ? null : new Date(dernierePartie),
                partiesJouees: UnCoup + DeuxCoups + TroisCoups + QuatreCoups + CinqCoups + SixCoups + Perdu,
                partiesGagnees: UnCoup + DeuxCoups + TroisCoups + QuatreCoups + CinqCoups + SixCoups,
                repartition: {
                    1: UnCoup,
                    2: DeuxCoups,
                    3: TroisCoups,
                    4: QuatreCoups,
                    5: CinqCoups,
                    6: SixCoups,
                    "-": Perdu,
                },
                lettresRepartitions: {
                    bienPlace: LettresBienPlacees,
                    malPlace: LettresMalPlacees,
                    nonTrouve: LettresNonTrouve,
                },
            };
        };
        Sauvegardeur._cleStats = "statistiques";
        Sauvegardeur._clePartieEnCours = "partieEnCours";
        Sauvegardeur._clePartieVeille = "partieVeille";
        Sauvegardeur._cleConfiguration = "configuration";
        return Sauvegardeur;
    }());
    exports.default = Sauvegardeur;
});
