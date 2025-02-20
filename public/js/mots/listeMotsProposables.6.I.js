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
        ListeMotsProposables.Dictionnaire = ["IAMBES", "IBERES", "IBERIS", "IBIDEM", "IBOGAS", "ICAQUE", "ICELLE", "ICELUI", "ICHORS", "ICONES", "ICTERE", "IDEALE", "IDEALS", "IDEAUX", "IDEELS", "IDIOME", "IDIOTE", "IDIOTS", "IDISTE", "IDOINE", "IDOLES", "IDYLLE", "IGLOOS", "IGLOUS", "IGNAME", "IGNARE", "IGNEES", "IGNORA", "IGNORE", "IGUANE", "ILEALE", "ILEAUX", "ILEITE", "ILEONS", "ILIENS", "ILIONS", "ILLICO", "ILLITE", "ILOTES", "IMAGEA", "IMAGEE", "IMAGER", "IMAGES", "IMAGEZ", "IMAGOS", "IMAMAT", "IMAMES", "IMANAT", "IMBIBA", "IMBIBE", "IMBUES", "IMIDES", "IMINES", "IMITAI", "IMITAS", "IMITAT", "IMITEE", "IMITER", "IMITES", "IMITEZ", "IMMOLA", "IMMOLE", "IMMUNE", "IMMUNS", "IMPACT", "IMPAIR", "IMPALA", "IMPAYE", "IMPERS", "IMPIES", "IMPOLI", "IMPORT", "IMPOSA", "IMPOSE", "IMPOTS", "IMPROS", "IMPUNI", "IMPURE", "IMPURS", "IMPUTA", "IMPUTE", "INALPE", "INAPTE", "INCISA", "INCISE", "INCITA", "INCITE", "INCLUE", "INCLUS", "INCLUT", "INCREE", "INCUBA", "INCUBE", "INCUIT", "INCUSE", "INDEXA", "INDEXE", "INDICA", "INDICE", "INDICS", "INDIEN", "INDIGO", "INDIUM", "INDOLE", "INDOUE", "INDOUS", "INDRIS", "INDUES", "INDUIS", "INDUIT", "INDULT", "INDURA", "INDURE", "INEDIT", "INEGAL", "INEPTE", "INERME", "INERTE", "INFAME", "INFANT", "INFECT", "INFERA", "INFERE", "INFIME", "INFINI", "INFIXE", "INFLUA", "INFLUE", "INFLUX", "INFULE", "INFUSA", "INFUSE", "INGENU", "INGERA", "INGERE", "INGRAT", "INHALA", "INHALE", "INHIBA", "INHIBE", "INHUMA", "INHUME", "INIQUE", "INITIA", "INITIE", "INITIO", "INJURE", "INLAYS", "INNEES", "INNOME", "INNOVA", "INNOVE", "INONDA", "INONDE", "INOUIE", "INOUIS", "INPUTS", "INSANE", "INSERA", "INSERE", "INSERT", "INSOLA", "INSOLE", "INSTAR", "INSTIT", "INTACT", "INTERS", "INTIMA", "INTIME", "INTRON", "INTROS", "INTRUS", "INTUBA", "INTUBE", "INUITE", "INUITS", "INULES", "INVARS", "INVITA", "INVITE", "IODAIS", "IODAIT", "IODANT", "IODATE", "IODEES", "IODENT", "IODERA", "IODIEZ", "IODLAI", "IODLAS", "IODLAT", "IODLER", "IODLES", "IODLEZ", "IODONS", "IODURE", "IONIEN", "IONISA", "IONISE", "IONONE", "IOULAI", "IOULAS", "IOULAT", "IOULER", "IOULES", "IOULEZ", "IOURTE", "IPECAS", "IPOMEE", "IPPONS", "IRIDIE", "IRIENS", "IRIONS", "IRISAI", "IRISAS", "IRISAT", "IRISEE", "IRISER", "IRISES", "IRISEZ", "IRITIS", "IROKOS", "IRONES", "IRONIE", "IRREEL", "IRRITA", "IRRITE", "ISARDS", "ISATIS", "ISLAMS", "ISOLAI", "ISOLAS", "ISOLAT", "ISOLEE", "ISOLER", "ISOLES", "ISOLEZ", "ISOPET", "ISOREL", "ISSANT", "ISSUES", "ISTHME", "ITERAI", "ITERAS", "ITERAT", "ITEREE", "ITERER", "ITERES", "ITEREZ", "IVETTE", "IVOIRE", "IVRAIE", "IXIEME", "IXODES"
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});
