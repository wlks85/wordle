var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./entites/configuration", "./sauvegardeur", "./entites/volumeSon", "./entites/clavierDisposition", "./copieHelper"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var volumeSon_1 = require("./entites/volumeSon");
    var clavierDisposition_1 = require("./entites/clavierDisposition");
    var copieHelper_1 = __importDefault(require("./copieHelper"));
    var ConfigurationPanel = /** @class */ (function () {
        function ConfigurationPanel(panelManager, audioPanel, themeManager) {
            var _this = this;
            this._panelManager = panelManager;
            this._audioPanel = audioPanel;
            this._themeManager = themeManager;
            this._configBouton = document.getElementById("configuration-config-bouton");
            this._configBouton.addEventListener("click", (function () {
                _this.afficher();
            }).bind(this));
        }
        ConfigurationPanel.prototype.afficher = function () {
            var _this = this;
            var _a, _b, _c, _d, _e;
            var titre = "Configuration";
            var contenu = document.createElement("div");
            contenu.id = "config-liste";
            var config = (_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default;
            contenu.appendChild(this.genererConfigItem("Volume du son (si activé)", [
                { value: volumeSon_1.VolumeSon.Faible.toString(), label: "Faible" },
                { value: volumeSon_1.VolumeSon.Normal.toString(), label: "Normal" },
                { value: volumeSon_1.VolumeSon.Fort.toString(), label: "Fort" },
            ], ((_b = config.volumeSon) !== null && _b !== void 0 ? _b : configuration_1.default.Default.volumeSon).toString(), function (event) {
                var _a;
                event.stopPropagation();
                var volumeSon = parseInt(event.target.value);
                _this._audioPanel.setVolumeSonore(volumeSon);
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { volumeSon: volumeSon }));
            }));
            contenu.appendChild(this.genererConfigItem("Disposition du clavier", [
                { value: clavierDisposition_1.ClavierDisposition.Azerty.toString(), label: "AZERTY" },
                { value: clavierDisposition_1.ClavierDisposition.Bépo.toString(), label: "BÉPO" },
                { value: clavierDisposition_1.ClavierDisposition.Qwerty.toString(), label: "QWERTY" },
                { value: clavierDisposition_1.ClavierDisposition.Qwertz.toString(), label: "QWERTZ" },
            ], ((_c = config.disposition) !== null && _c !== void 0 ? _c : configuration_1.default.Default.disposition).toString(), function (event) {
                var _a;
                event.stopPropagation();
                var disposition = parseInt(event.target.value);
                if (_this._input)
                    _this._input.dessinerClavier(disposition);
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { disposition: disposition }));
            }));
            // contenu.appendChild(
            //   this.genererConfigItem(
            //     "Thème",
            //     [
            //       { value: Theme.Sombre.toString(), label: "Sombre" },
            //       { value: Theme.Clair.toString(), label: "Clair" },
            //       { value: Theme.SombreAccessible.toString(), label: "Sombre (Accessible)" },
            //       { value: Theme.ClairAccessible.toString(), label: "Clair (Accessible)" },
            //     ],
            //     (config.theme ?? Configuration.Default.theme).toString(),
            //     (event: Event) => {
            //       event.stopPropagation();
            //       let theme: Theme = parseInt((event.target as HTMLSelectElement).value);
            //       this._themeManager.changerCouleur(theme);
            //       Sauvegardeur.sauvegarderConfig({
            //         ...(Sauvegardeur.chargerConfig() ?? Configuration.Default),
            //         theme,
            //       });
            //     }
            //   )
            // );
            contenu.appendChild(this.genererConfigItem("Afficher le temps sur le résumé (à la prochaine partie)", [
                { value: false.toString(), label: "Non" },
                { value: true.toString(), label: "Oui" },
            ], ((_d = config.afficherChrono) !== null && _d !== void 0 ? _d : configuration_1.default.Default.afficherChrono).toString(), function (event) {
                var _a;
                event.stopPropagation();
                var afficherChrono = event.target.value === true.toString();
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { afficherChrono: afficherChrono }));
            }));
            contenu.appendChild(this.genererConfigItem("Retour haptique (si votre navigateur est compatible)", [
                { value: false.toString(), label: "Non" },
                { value: true.toString(), label: "Oui" },
            ], ((_e = config.haptique) !== null && _e !== void 0 ? _e : configuration_1.default.Default.haptique).toString(), function (event) {
                var _a, _b;
                event.stopPropagation();
                var haptique = event.target.value === true.toString();
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { haptique: haptique }));
                // On redessine le clavier pour la prise en compte de l'option
                if (_this._input)
                    _this._input.dessinerClavier((_b = config.disposition) !== null && _b !== void 0 ? _b : configuration_1.default.Default.disposition);
            }));
            if (sauvegardeur_1.default.chargerSauvegardeStats())
                contenu.appendChild(this.genererZoneExportSauvegarde());
            this._panelManager.setContenuHtmlElement(titre, contenu);
            this._panelManager.setClasses(["config-panel"]);
            this._panelManager.afficherPanel();
        };
        ConfigurationPanel.prototype.genererConfigItem = function (nomConfig, options, valeurChoisie, onChange) {
            var div = document.createElement("div");
            div.className = "config-item";
            var label = document.createElement("label");
            label.innerText = nomConfig;
            div.appendChild(label);
            var select = document.createElement("select");
            for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
                var optionItem = options_1[_i];
                var optionElement = document.createElement("option");
                optionElement.value = optionItem.value;
                optionElement.innerText = optionItem.label;
                if (optionItem.value === valeurChoisie)
                    optionElement.selected = true;
                select.appendChild(optionElement);
            }
            if (onChange !== undefined)
                select.addEventListener("change", onChange);
            div.appendChild(select);
            return div;
        };
        ConfigurationPanel.prototype.genererZoneExportSauvegarde = function () {
            var div = document.createElement("div");
            div.id = "config-sauvegarde-area";
            var titreSection = document.createElement("h3");
            titreSection.innerText = "Exporter vos statistiques";
            div.appendChild(titreSection);
            var explication = document.createElement("p");
            explication.innerText = "Pour transférer vos statistiques sur un autre navigateur, il est possible de suivre les étapes suivantes :";
            div.appendChild(explication);
            var listeEtape = document.createElement("ol");
            var etape1 = document.createElement("li");
            var etape1Texte = document.createElement("p");
            etape1Texte.innerText = "Copiez ce lien à usage unique.";
            etape1.appendChild(etape1Texte);
            var etape1Input = document.createElement("input");
            var contenuLien = sauvegardeur_1.default.genererLien();
            // const lien = window.location.origin + window.location.pathname + "#" + btoa("s=" + contenuLien);
            var lien = "https://devine-voir.dis-voir.ch";
            etape1Input.value = lien;
            etape1Input.readOnly = true;
            etape1.appendChild(etape1Input);
            var etape1Bouton = copieHelper_1.default.creerBoutonPartage("config-sauvegarde-bouton");
            copieHelper_1.default.attacheBoutonCopieLien(etape1Bouton, lien, "Lien copié dans le presse papier.");
            etape1.appendChild(etape1Bouton);
            listeEtape.appendChild(etape1);
            var etape2 = document.createElement("li");
            etape2.innerText = "Envoyez le lien vers votre autre appareil.";
            listeEtape.appendChild(etape2);
            var etape3 = document.createElement("li");
            etape3.innerText = "Ouvrez ce lien dans votre autre navigateur.";
            listeEtape.appendChild(etape3);
            div.appendChild(listeEtape);
            return div;
        };
        ConfigurationPanel.prototype.setInput = function (input) {
            this._input = input;
        };
        return ConfigurationPanel;
    }());
    exports.default = ConfigurationPanel;
});
