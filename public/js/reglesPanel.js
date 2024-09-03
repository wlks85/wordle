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
        define(["require", "exports", "./entites/configuration", "./sauvegardeur"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var configuration_1 = __importDefault(require("./entites/configuration"));
    var sauvegardeur_1 = __importDefault(require("./sauvegardeur"));
    var ReglesPanel = /** @class */ (function () {
        function ReglesPanel(panelManager) {
            var _this = this;
            this._panelManager = panelManager;
            this._rulesBouton = document.getElementById("configuration-regles-bouton");
            this._rulesBouton.addEventListener("click", (function () {
                _this.afficher();
            }).bind(this));
        }
        ReglesPanel.prototype.afficher = function () {
            var titre = "Règles";
            var contenu = "<p>" +
                "Le jeu repose sur la recherche d’un mot qui comporte entre 6 et 9 lettres.<br />" +
                "Vous disposez de six essais pour deviner le mot du jour.<br />" +
                "Les mots à deviner sont des mots typiquement romands, et si on peut les entendre en France voisine, ils sont à coup sûr inconnus du français que l’on parle à Paris et en Île-de-France !<br />" +
                "</p>" +
                '<div class="grille">' +
                "<table>" +
                "<tr>" +
                '<td class="resultat bien-place">A</td>' +
                '<td class="resultat non-trouve">D</td>' +
                '<td class="resultat non-trouve">I</td>' +
                '<td class="resultat mal-place">E</td>' +
                '<td class="resultat mal-place">U</td>' +
                "</tr>" +
                "</table></br>" +
                "🟥 Les lettres entourées d'un carré rouge sont bien placées (joli !).<br />" +
                "🔵 Les lettres entourées d'un cercle bleu ne sont pas à la bonne place (mais présentes dans le mot !).<br />" +
                "⬜ Les lettres qui restent sur fond blanc ne sont pas dans le mot (de bleu !).<br />" +
                "</div>" +
                "<p>" +
                '<strong>Attention !</strong> Vous ne pouvez proposer que des mots commençant par la même lettre que le mot recherché.' +
                'Les noms propres et les gentilés ne sont pas acceptés.' +
                'Le mot change chaque jour.<br />' +
                'Évitez donc de divulgâcher la solution sur les réseaux sociaux et préférez le bouton de partage !<br /><br />' +
                'Crédits<br /><br />' +
                "MOOTÜS est la variante romande de <a href='https://motchus.fr/' target='_blank'>MOTCHUS</a>, la version marseillaise du regretté <a href='https://fr.wikipedia.org/wiki/Motus_(jeu_t%C3%A9l%C3%A9vis%C3%A9)' target='_blank'>MOTUS</a><br />" +
                ', mis en ligne par <a href="https://x.com/ze_armavi" target="_blank">@ze_armavi</a> sur la base du dico de <a href="https://x.com/MedericGC" target="_blank">@MedericGC</a>. L’interface est adaptée de <a href="https://sutom.nocle.fr/#" target="_blank">SUTOM</a> (<a href="https://x.com/jonamaths" target="_blank">@Jonamaths</a>). Les mots romands sont tirés du <a href="https://www.editionszoe.ch/livre/dictionnaire-suisse-romand-particularites-du-francais-contemporain-1" target="_blank">Dictionnaire suisse romand</a> d’André Thibault, les mots du lexique standard sont ceux de la base <a href="http://www.lexique.org/" target="_blank">Lexique</a>. MOOTÜS a été adapté par l’équipe <a href="https://www.ibros.ch/" target="_blank">iBros GmbH</a> dans le cadre du projet <a href="https://dis-voir.ch/" target="_blank">FNS Agora Dis voir !</a><br />' +
                '<br /><br/>' +
                'Solution du mot d’hier<br/ ><br/>' +
                "<b> Batoille </b>. Nom commun ou adjectif, qui désigne aussi bien une personne bavarde qu’une élocution rapide et abondante. La variante batouille a été enregistrée dans les cantons de Neuchâtel et Jura. Ex. « Tu m’avais dit qu’elle était muette, mais je peux t’assurer que pour une batoille, c’est une batoille ! » (E. Gardaz, Oin-oin et ses nouvelles histoires, 1973, p.191)" +
                "</p>";
            this._panelManager.setContenu(titre, contenu);
            this._panelManager.setClasses(["regles-panel"]);
            this._panelManager.setCallbackFermeture(function () {
                var _a;
                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { afficherRegles: false }));
            });
            this._panelManager.afficherPanel();
        };
        return ReglesPanel;
    }());
    exports.default = ReglesPanel;
});
