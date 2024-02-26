(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListeMotsProposables = /** @class */ (function () {
        function ListeMotsProposables() {
        }
        ListeMotsProposables.Dictionnaire = ["UBIQUE", "UHLANS", "UKASES", "ULCERA", "ULCERE", "ULEMAS", "ULTIME", "ULTIMO", "ULTRAS", "ULULAI", "ULULAS", "ULULAT", "ULULER", "ULULES", "ULULEZ", "UMAMIS", "UMLAUT", "UMMITE", "UNAIRE", "UNCINE", "UNGUIS", "UNIATE", "UNIAXE", "UNIEME", "UNIFIA", "UNIFIE", "UNIMES", "UNIONS", "UNIQUE", "UNIRAI", "UNIRAS", "UNIREZ", "UNISSE", "UNITES", "UNITIF", "UNTELS", "URAETE", "URAEUS", "URANES", "URANIE", "URATES", "URBAIN", "UREIDE", "UREMIE", "URETRE", "URGEAT", "URGENT", "URGERA", "URINAI", "URINAL", "URINAS", "URINAT", "URINEE", "URINER", "URINES", "URINEZ", "URIQUE", "URSIDE", "URUBUS", "USAGEE", "USAGER", "USAGES", "USAMES", "USANCE", "USANTE", "USANTS", "USASSE", "USATES", "USERAI", "USERAS", "USEREZ", "USINAI", "USINAS", "USINAT", "USINEE", "USINER", "USINES", "USINEZ", "USIONS", "USITEE", "USITES", "USNEES", "USUELS", "USURES", "USURPA", "USURPE", "UTERIN", "UTERUS", "UTILES", "UTOPIE", "UVALES", "UVEITE", "UVULAS", "UVULES", "UZBEKS"
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});
