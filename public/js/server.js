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
        define(["require", "exports", "express", "http", "./instanceConfiguration", "./lib", "dotenv", "./api", "body-parser"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var express_1 = __importDefault(require("express"));
    var http_1 = __importDefault(require("http"));
    var instanceConfiguration_1 = __importDefault(require("./instanceConfiguration"));
    var lib_1 = require("./lib");
    var dotenv_1 = __importDefault(require("dotenv"));
    var api_1 = __importDefault(require("./api"));
    var body_parser_1 = __importDefault(require("body-parser"));
    dotenv_1.default.config();
    var app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    var port = parseInt(String(process.env.SUTOM_PORT), 10) || 4000;
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var datePartie, datePartieStr, nomFichier, server;
        return __generator(this, function (_a) {
            app.use("/", express_1.default.static("public/"));
            app.use("/js", express_1.default.static("public/js/"));
            app.use("/ts", express_1.default.static("ts/"));
            app.use("/mots", express_1.default.static("public/mots/"));
            app.use("/node_modules/requirejs/require.js", express_1.default.static("node_modules/requirejs/require.js"));
            (0, api_1.default)(app);
            datePartie = new Date();
            datePartieStr = datePartie.getFullYear().toString() +
                "-" +
                (datePartie.getMonth() + 1).toString().padStart(2, "0") +
                "-" +
                datePartie.getDate().toString().padStart(2, "0");
            nomFichier = Buffer.from(instanceConfiguration_1.default.idPartieParDefaut + "-" + datePartieStr, "utf-8").toString("base64");
            // const adresseFichierMot = "public/mots/" + nomFichier + ".txt";
            // fs.access(adresseFichierMot, fs.constants.F_OK, (err) => {
            //   if (err) {
            //     fs.writeFile(adresseFichierMot, "DIFFUSION", (err) => {
            //       if (err) console.error(err);
            //     });
            //   }
            // });
            app.use(express_1.default.json());
            server = http_1.default.createServer(app);
            (0, lib_1.InitDb)()
                .then(function () {
                server.listen(port, function () {
                    console.log("Jeu d\u00E9marr\u00E9 : http://127.0.0.1:".concat(port));
                });
            })
                .catch(function (err) {
                console.error(err.message);
            });
            return [2 /*return*/];
        });
    }); })();
});
