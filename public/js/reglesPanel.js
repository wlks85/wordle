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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        ReglesPanel.prototype.dataFetch = function () {
            return __awaiter(this, void 0, void 0, function () {
                var response, data, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, fetch("/api/words/prev/word")];
                        case 1:
                            response = _a.sent();
                            if (!response.ok) {
                                throw new Error("HTTP error! Status: ".concat(response.status));
                            }
                            return [4 /*yield*/, response.json()];
                        case 2:
                            data = _a.sent();
                            return [2 /*return*/, data.data]; // Return the data to be used by afficher()
                        case 3:
                            error_1 = _a.sent();
                            console.error("There was an error with the fetch operation:", error_1);
                            return [2 /*return*/, null]; // Return null if there's an error
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        ReglesPanel.prototype.afficher = function () {
            return __awaiter(this, void 0, void 0, function () {
                var prevWord, titre, contenu;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.dataFetch()];
                        case 1:
                            prevWord = _a.sent();
                            titre = "Règles";
                            contenu = "<p>" +
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
                                "<strong>Attention !</strong> Vous ne pouvez proposer que des mots commençant par la même lettre que le mot recherché." +
                                "Les noms propres et les gentilés ne sont pas acceptés." +
                                "Le mot change chaque jour.<br />" +
                                "Évitez donc de divulgâcher la solution sur les réseaux sociaux et préférez le bouton de partage !<br /><br />" +
                                "Crédits<br /><br />" +
                                "MOOTÜS est la variante romande de <a href='https://motchus.fr/' target='_blank'>MOTCHUS</a>, la version marseillaise du regretté <a href='https://fr.wikipedia.org/wiki/Motus_(jeu_t%C3%A9l%C3%A9vis%C3%A9)' target='_blank'>MOTUS</a><br />" +
                                ', mis en ligne par <a href="https://x.com/ze_armavi" target="_blank">@ze_armavi</a> sur la base du dico de <a href="https://x.com/MedericGC" target="_blank">@MedericGC</a>. L’interface est adaptée de <a href="https://sutom.nocle.fr/#" target="_blank">SUTOM</a> (<a href="https://x.com/jonamaths" target="_blank">@Jonamaths</a>). Les mots romands sont tirés du <a href="https://www.editionszoe.ch/livre/dictionnaire-suisse-romand-particularites-du-francais-contemporain-1" target="_blank">Dictionnaire suisse romand</a> d’André Thibault, les mots du lexique standard sont ceux de la base <a href="http://www.lexique.org/" target="_blank">Lexique</a>. MOOTÜS a été adapté par l’équipe <a href="https://www.ibros.ch/" target="_blank">iBros GmbH</a> dans le cadre du projet <a href="https://dis-voir.ch/" target="_blank">FNS Agora Dis voir !</a><br />' +
                                "<br />";
                            if (prevWord) {
                                contenu += "\n          <p>\n          Solution du mot d\u2019hier<br/><br/>\n          <b>".concat(prevWord.word, "</b>. ").concat(prevWord.description, "\n          </p>\n        ");
                            }
                            this._panelManager.setContenu(titre, contenu);
                            this._panelManager.setClasses(["regles-panel"]);
                            this._panelManager.setCallbackFermeture(function () {
                                var _a;
                                sauvegardeur_1.default.sauvegarderConfig(__assign(__assign({}, ((_a = sauvegardeur_1.default.chargerConfig()) !== null && _a !== void 0 ? _a : configuration_1.default.Default)), { afficherRegles: false }));
                            });
                            this._panelManager.afficherPanel();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return ReglesPanel;
    }());
    exports.default = ReglesPanel;
});
