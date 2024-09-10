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
        define(["require", "exports", "../../instanceConfiguration", "../entities"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DictionaryService = void 0;
    var instanceConfiguration_1 = __importDefault(require("../../instanceConfiguration"));
    var entities_1 = require("../entities");
    var validateWord = function (word) {
        var regex = /\s/;
        if (!word)
            return false;
        return !regex.test(word.title);
    };
    var DictionaryService = /** @class */ (function () {
        function DictionaryService() {
        }
        DictionaryService.getWordByName = function (keyword) {
            return __awaiter(this, void 0, void 0, function () {
                var word;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (/\s/.test(keyword))
                                throw new Error("400- Bad request");
                            return [4 /*yield*/, entities_1.WordModel.findOne({
                                    word: new RegExp(keyword, "i"),
                                })];
                        case 1:
                            word = _a.sent();
                            if (!word)
                                throw new Error("404- requested resource ".concat(keyword, " is not found"));
                            return [2 /*return*/, word];
                    }
                });
            });
        };
        // Method to calculate the current "day_X" based on the difference from dateOrigine
        DictionaryService.getDayX = function () {
            var today = new Date();
            var timeDiff = today.getTime() - instanceConfiguration_1.default.dateOrigine.getTime();
            var daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Calculate days difference
            return "day_".concat(daysDiff);
        };
        DictionaryService.getPrevWord = function () {
            return __awaiter(this, void 0, void 0, function () {
                var prev_day, wordData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            prev_day = this.getDayX();
                            return [4 /*yield*/, entities_1.WordModel.findOne({ release: prev_day }).exec()];
                        case 1:
                            wordData = _a.sent();
                            return [2 /*return*/, wordData];
                    }
                });
            });
        };
        DictionaryService.getWords = function () {
            return __awaiter(this, void 0, void 0, function () {
                var wordData, da;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, entities_1.WordModel.find({}).select("word")];
                        case 1:
                            wordData = _a.sent();
                            da = wordData.map(function (item) { return item.word; });
                            return [2 /*return*/, da];
                    }
                });
            });
        };
        DictionaryService.saveAWord = function (word) {
            return __awaiter(this, void 0, void 0, function () {
                var dbWord;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!validateWord(word))
                                throw new Error("400- Bad request");
                            word.title = word.title.toUpperCase();
                            dbWord = new entities_1.WordModel(__assign({}, word));
                            return [4 /*yield*/, dbWord.save()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, dbWord];
                    }
                });
            });
        };
        // answers
        DictionaryService.updateAnswer = function (_a) {
            var word = _a.word, title = _a.title;
            return __awaiter(this, void 0, void 0, function () {
                var newAnswer, err_1;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            newAnswer = new entities_1.AnswersModel({ title: title, word: word });
                            return [4 /*yield*/, newAnswer.save()];
                        case 1:
                            _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            err_1 = _b.sent();
                            console.error("Error in upsertAnswer:", err_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        DictionaryService.getWordByTitle = function (title) {
            return __awaiter(this, void 0, void 0, function () {
                var wordData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, entities_1.AnswersModel.findOne({ title: title }).select("word").lean()];
                        case 1:
                            wordData = _a.sent();
                            return [2 /*return*/, wordData ? wordData.word : null];
                    }
                });
            });
        };
        DictionaryService.deleteAnswers = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, entities_1.AnswersModel.deleteMany({})];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        return DictionaryService;
    }());
    exports.DictionaryService = DictionaryService;
});
