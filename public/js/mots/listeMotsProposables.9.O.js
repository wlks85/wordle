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
        ListeMotsProposables.Dictionnaire = ["OASIENNES", "OBDUCTION", "OBEDIENCE", "OBEIRIONS", "OBEISSAIS", "OBEISSAIT", "OBEISSANT", "OBEISSENT", "OBEISSIEZ", "OBEISSONS", "OBELISQUE", "OBERAIENT", "OBERASSES", "OBERERAIS", "OBERERAIT", "OBERERENT", "OBERERIEZ", "OBERERONS", "OBERERONT", "OBITUAIRE", "OBJECTAIS", "OBJECTAIT", "OBJECTALE", "OBJECTANT", "OBJECTAUX", "OBJECTEES", "OBJECTENT", "OBJECTERA", "OBJECTEUR", "OBJECTIEZ", "OBJECTIFS", "OBJECTION", "OBJECTIVA", "OBJECTIVE", "OBJECTONS", "OBJURGUAI", "OBJURGUAS", "OBJURGUAT", "OBJURGUER", "OBJURGUES", "OBJURGUEZ", "OBLATIONS", "OBLATIVES", "OBLATURES", "OBLICITES", "OBLIGEAIS", "OBLIGEAIT", "OBLIGEANT", "OBLIGEONS", "OBLIGERAI", "OBLIGERAS", "OBLIGEREZ", "OBLIGIONS", "OBLIQUAIS", "OBLIQUAIT", "OBLIQUANT", "OBLIQUENT", "OBLIQUERA", "OBLIQUIEZ", "OBLIQUITE", "OBLIQUONS", "OBLITERAI", "OBLITERAS", "OBLITERAT", "OBLITEREE", "OBLITERER", "OBLITERES", "OBLITEREZ", "OBLONGUES", "OBNUBILAI", "OBNUBILAS", "OBNUBILAT", "OBNUBILEE", "OBNUBILER", "OBNUBILES", "OBNUBILEZ", "OBOMBRAIS", "OBOMBRAIT", "OBOMBRANT", "OBOMBREES", "OBOMBRENT", "OBOMBRERA", "OBOMBRIEZ", "OBOMBRONS", "OBSCENITE", "OBSCURCIE", "OBSCURCIR", "OBSCURCIS", "OBSCURCIT", "OBSCURITE", "OBSEDAMES", "OBSEDANTE", "OBSEDANTS", "OBSEDASSE", "OBSEDATES", "OBSEDERAI", "OBSEDERAS", "OBSEDEREZ", "OBSEDIONS", "OBSERVAIS", "OBSERVAIT", "OBSERVANT", "OBSERVEES", "OBSERVENT", "OBSERVERA", "OBSERVIEZ", "OBSERVONS", "OBSESSIFS", "OBSESSION", "OBSESSIVE", "OBSOLETES", "OBSTACLES", "OBSTINAIS", "OBSTINAIT", "OBSTINANT", "OBSTINEES", "OBSTINENT", "OBSTINERA", "OBSTINIEZ", "OBSTINONS", "OBSTRUAIS", "OBSTRUAIT", "OBSTRUANT", "OBSTRUEES", "OBSTRUENT", "OBSTRUERA", "OBSTRUIEZ", "OBSTRUONS", "OBTEMPERA", "OBTEMPERE", "OBTENABLE", "OBTENIONS", "OBTENTEUR", "OBTENTION", "OBTIENDRA", "OBTIENNES", "OBTINRENT", "OBTINSSES", "OBTURABLE", "OBTURAMES", "OBTURASSE", "OBTURATES", "OBTURERAI", "OBTURERAS", "OBTUREREZ", "OBTURIONS", "OBVENIONS", "OBVIAIENT", "OBVIASSES", "OBVIATION", "OBVIENDRA", "OBVIENNES", "OBVIERAIS", "OBVIERAIT", "OBVIERENT", "OBVIERIEZ", "OBVIERONS", "OBVIERONT", "OBVINRENT", "OBVINSSES", "OCCASIONS", "OCCIDENTS", "OCCIPITAL", "OCCISIONS", "OCCITANES", "OCCLUIONS", "OCCLURAIS", "OCCLURAIT", "OCCLURENT", "OCCLURIEZ", "OCCLURONS", "OCCLURONT", "OCCLUSALE", "OCCLUSAUX", "OCCLUSIFS", "OCCLUSION", "OCCLUSIVE", "OCCLUSSES", "OCCULTAIS", "OCCULTAIT", "OCCULTANT", "OCCULTEES", "OCCULTENT", "OCCULTERA", "OCCULTEUR", "OCCULTIEZ", "OCCULTONS", "OCCUPAMES", "OCCUPANTE", "OCCUPANTS", "OCCUPASSE", "OCCUPATES", "OCCUPERAI", "OCCUPERAS", "OCCUPEREZ", "OCCUPIONS", "OCCURRAIS", "OCCURRAIT", "OCCURRANT", "OCCURRENT", "OCCURRERA", "OCCURRIEZ", "OCCURRONS", "OCEANAUTE", "OCEANIDES", "OCEANIENS", "OCEANIQUE", "OCEANISTE", "OCEANITES", "OCRASSENT", "OCRASSIEZ", "OCRERIONS", "OCTACORDE", "OCTAEDRES", "OCTALOGIE", "OCTAVIAIS", "OCTAVIAIT", "OCTAVIANT", "OCTAVIEES", "OCTAVIENT", "OCTAVIERA", "OCTAVIIEZ", "OCTAVIONS", "OCTILLION", "OCTOGONAL", "OCTOGONES", "OCTONIONS", "OCTOPODES", "OCTOSTYLE", "OCTROIENT", "OCTROIERA", "OCTROYAIS", "OCTROYAIT", "OCTROYANT", "OCTROYEES", "OCTROYIEZ", "OCTROYONS", "OCTUPLAIS", "OCTUPLAIT", "OCTUPLANT", "OCTUPLEES", "OCTUPLENT", "OCTUPLERA", "OCTUPLIEZ", "OCTUPLONS", "OCULAIRES", "OCULISTES", "OCULOGYRE", "OCYTOCINE", "ODALISQUE", "ODELETTES", "ODOMETRES", "ODOMETRIE", "ODONTOIDE", "ODONYMIES", "ODORANTES", "OEDICNEME", "OEDIPIENS", "OEILLADES", "OEILLAMES", "OEILLARDS", "OEILLASSE", "OEILLATES", "OEILLERAI", "OEILLERAS", "OEILLERES", "OEILLEREZ", "OEILLETON", "OEILLETTE", "OEILLIONS", "OEKOUMENE", "OENANTHES", "OENILISME", "OENOLIQUE", "OENOLISME", "OENOLOGIE", "OENOLOGUE", "OENOMETRE", "OENOPHILE", "OENOTHERA", "OENOTHERE", "OERSTITES", "OESOPHAGE", "OESTRALES", "OESTRIOLS", "OESTRONES", "OEUFRIERS", "OEUVRAMES", "OEUVRASSE", "OEUVRATES", "OEUVRERAI", "OEUVRERAS", "OEUVREREZ", "OEUVRETTE", "OEUVRIONS", "OFFENSAIS", "OFFENSAIT", "OFFENSANT", "OFFENSEES", "OFFENSENT", "OFFENSERA", "OFFENSEUR", "OFFENSIEZ", "OFFENSIFS", "OFFENSIVE", "OFFENSONS", "OFFICIAIS", "OFFICIAIT", "OFFICIANT", "OFFICIAUX", "OFFICIELS", "OFFICIENT", "OFFICIERA", "OFFICIERE", "OFFICIERS", "OFFICIEUX", "OFFICIIEZ", "OFFICINAL", "OFFICINES", "OFFICIONS", "OFFRAIENT", "OFFRANDES", "OFFRANTES", "OFFREUSES", "OFFRIRAIS", "OFFRIRAIT", "OFFRIRENT", "OFFRIRIEZ", "OFFRIRONS", "OFFRIRONT", "OFFRISSES", "OFFSHORES", "OFFUSQUAI", "OFFUSQUAS", "OFFUSQUAT", "OFFUSQUEE", "OFFUSQUER", "OFFUSQUES", "OFFUSQUEZ", "OGANESSON", "OGHAMIQUE", "OGNONADES", "OGNONIERE", "OHMMETRES", "OIGNAIENT", "OIGNIRENT", "OIGNISSES", "OIGNONADE", "OINDRIONS", "OISELAMES", "OISELASSE", "OISELATES", "OISELERAI", "OISELERAS", "OISELEREZ", "OISELEURS", "OISELEUSE", "OISELIERE", "OISELIERS", "OISELIONS", "OISELLENT", "OISELLERA", "OISIENNES", "OISILLONS", "OISIVETES", "OLDOWAYEN", "OLEANDRES", "OLEASTRES", "OLECRANES", "OLEFIANTE", "OLEFIANTS", "OLEICOLES", "OLEIFERES", "OLEIFORME", "OLEOMETRE", "OLEOSOMES", "OLFACTIFS", "OLFACTION", "OLFACTIVE", "OLIGARQUE", "OLIGISTES", "OLIGOCENE", "OLIGOMERE", "OLIGOPOLE", "OLIGOSIDE", "OLIGURIES", "OLIPHANTS", "OLIVACEES", "OLIVAISON", "OLIVATRES", "OLIVERAIE", "OLIVETAIN", "OLIVETTES", "OLOGRAPHE", "OLYMPIADE", "OLYMPIENS", "OLYMPIQUE", "OLYMPISME", "OMANAISES", "OMBELLEES", "OMBELLULE", "OMBILICAL", "OMBILIQUE", "OMBRAGEAI", "OMBRAGEAS", "OMBRAGEAT", "OMBRAGEES", "OMBRAGENT", "OMBRAGERA", "OMBRAGEUX", "OMBRAGIEZ", "OMBRAIENT", "OMBRASSES", "OMBRELLES", "OMBRERAIS", "OMBRERAIT", "OMBRERENT", "OMBRERIEZ", "OMBRERONS", "OMBRERONT", "OMBRETTES", "OMBREUSES", "OMBRIENNE", "OMBRIERES", "OMBUDSMAN", "OMBUDSMEN", "OMELETTES", "OMETTIONS", "OMETTRAIS", "OMETTRAIT", "OMETTRIEZ", "OMETTRONS", "OMETTRONT", "OMEYYADES", "OMISSIBLE", "OMISSIONS", "OMMATIDIE", "OMNIVORES", "OMOPLATES", "OMPHACITE", "OMPHALITE", "ONAGRACEE", "ONANISMES", "ONANISTES", "ONCOGENES", "ONCOLOGIE", "ONCOLOGUE", "ONCOTIQUE", "ONCTUEUSE", "ONDELETTE", "ONDEMETRE", "ONDINISME", "ONDOIERAI", "ONDOIERAS", "ONDOIEREZ", "ONDOYAMES", "ONDOYANTE", "ONDOYANTS", "ONDOYASSE", "ONDOYATES", "ONDOYIONS", "ONDULAMES", "ONDULANTE", "ONDULANTS", "ONDULASSE", "ONDULATES", "ONDULERAI", "ONDULERAS", "ONDULEREZ", "ONDULEURS", "ONDULEUSE", "ONDULIONS", "ONEREUSES", "ONGLERIES", "ONGLETTES", "ONGUICULE", "ONIRIQUES", "ONIRISMES", "ONKOTIQUE", "ONTARIENS", "ONTOGENIE", "ONTOLOGIE", "ONUSIENNE", "OOLITIQUE", "OOMYCETES", "OOSPHERES", "OOTHEQUES", "OPACIFIAI", "OPACIFIAS", "OPACIFIAT", "OPACIFIEE", "OPACIFIER", "OPACIFIES", "OPACIFIEZ", "OPALISAIS", "OPALISAIT", "OPALISANT", "OPALISEES", "OPALISENT", "OPALISERA", "OPALISIEZ", "OPALISONS", "OPERABLES", "OPERAIENT", "OPERANDES", "OPERANTES", "OPERASSES", "OPERATEUR", "OPERATIFS", "OPERATION", "OPERATIVE", "OPERCULEE", "OPERCULES", "OPERERAIS", "OPERERAIT", "OPERERENT", "OPERERIEZ", "OPERERONS", "OPERERONT", "OPERETTES", "OPHIDIENS", "OPHIOLITE", "OPHTALMIE", "OPHTALMOS", "OPIACAMES", "OPIACASSE", "OPIACATES", "OPIACERAI", "OPIACERAS", "OPIACEREZ", "OPIACIONS", "OPINAIENT", "OPINASSES", "OPINERAIS", "OPINERAIT", "OPINERENT", "OPINERIEZ", "OPINERONS", "OPINERONT", "OPINIATRA", "OPINIATRE", "OPIOMANES", "OPIOMANIE", "OPPORTUNE", "OPPORTUNS", "OPPOSABLE", "OPPOSAMES", "OPPOSANTE", "OPPOSANTS", "OPPOSASSE", "OPPOSATES", "OPPOSERAI", "OPPOSERAS", "OPPOSEREZ", "OPPOSIONS", "OPPOSITES", "OPPOSITIF", "OPPRESSAI", "OPPRESSAS", "OPPRESSAT", "OPPRESSEE", "OPPRESSER", "OPPRESSES", "OPPRESSEZ", "OPPRESSIF", "OPPRIMAIS", "OPPRIMAIT", "OPPRIMANT", "OPPRIMEES", "OPPRIMENT", "OPPRIMERA", "OPPRIMIEZ", "OPPRIMONS", "OPPROBRES", "OPSONINES", "OPSONIQUE", "OPTASSENT", "OPTASSIEZ", "OPTATIVES", "OPTERIONS", "OPTICIENS", "OPTIMALES", "OPTIMISAI", "OPTIMISAS", "OPTIMISAT", "OPTIMISEE", "OPTIMISER", "OPTIMISES", "OPTIMISEZ", "OPTIMISME", "OPTIMISTE", "OPTIONNEL", "OPTOMETRE", "OPULENCES", "OPULENTES", "OPUSCULES", "ORAGEUSES", "ORALEMENT", "ORALISAIS", "ORALISAIT", "ORALISANT", "ORALISEES", "ORALISENT", "ORALISERA", "ORALISIEZ", "ORALISMES", "ORALISONS", "ORANAISES", "ORANGEADE", "ORANGEAIS", "ORANGEAIT", "ORANGEANT", "ORANGEONS", "ORANGERAI", "ORANGERAS", "ORANGEREZ", "ORANGERIE", "ORANGETTE", "ORANGIONS", "ORANGISTE", "ORATOIRES", "ORATORIEN", "ORATORIOS", "ORATRICES", "ORBICOLES", "ORBITAIRE", "ORBITALES", "ORBITAMES", "ORBITASSE", "ORBITATES", "ORBITERAI", "ORBITERAS", "ORBITEREZ", "ORBITEURS", "ORBITIONS", "ORCANETTE", "ORCHESTIE", "ORCHESTRA", "ORCHESTRE", "ORCHIDEES", "ORDALIQUE", "ORDINAIRE", "ORDINALES", "ORDINANDS", "ORDINANTS", "ORDIPHONE", "ORDONNAIS", "ORDONNAIT", "ORDONNANT", "ORDONNEES", "ORDONNENT", "ORDONNERA", "ORDONNIEZ", "ORDONNONS", "ORDURIERE", "ORDURIERS", "OREILLARD", "OREILLERS", "OREILLONS", "OREXIGENE", "ORFEVREES", "ORGANEAUX", "ORGANIQUE", "ORGANISAI", "ORGANISAS", "ORGANISAT", "ORGANISEE", "ORGANISER", "ORGANISES", "ORGANISEZ", "ORGANISME", "ORGANISTE", "ORGANITES", "ORGANSINA", "ORGANSINE", "ORGANSINS", "ORGIAQUES", "ORIENTAIS", "ORIENTAIT", "ORIENTALE", "ORIENTANT", "ORIENTAUX", "ORIENTEES", "ORIENTENT", "ORIENTERA", "ORIENTEUR", "ORIENTIEZ", "ORIENTONS", "ORIFLAMME", "ORIGINAIS", "ORIGINAIT", "ORIGINALE", "ORIGINANT", "ORIGINAUX", "ORIGINEES", "ORIGINELS", "ORIGINENT", "ORIGINERA", "ORIGINIEZ", "ORIGINONS", "ORINGUAIS", "ORINGUAIT", "ORINGUANT", "ORINGUEES", "ORINGUENT", "ORINGUERA", "ORINGUIEZ", "ORINGUONS", "ORIOLIDES", "ORLEANAIS", "ORNASSENT", "ORNASSIEZ", "ORNEMENTA", "ORNEMENTE", "ORNEMENTS", "ORNERIONS", "ORNITHINE", "ORNITHOSE", "OROBANCHE", "OROFACIAL", "OROGENESE", "OROGENIES", "ORONYMIES", "ORPHELINE", "ORPHELINS", "ORPHIQUES", "ORPHISMES", "ORPIMENTS", "ORSEILLES", "ORTHODOXE", "ORTHOEPIE", "ORTHOPNEE", "ORTHOPTIE", "ORVIETANS", "ORWELLIEN", "OSASSIONS", "OSCABRION", "OSCARISAI", "OSCARISAS", "OSCARISAT", "OSCARISEE", "OSCARISER", "OSCARISES", "OSCARISEZ", "OSCIETRES", "OSCILLAIS", "OSCILLAIT", "OSCILLANT", "OSCILLENT", "OSCILLERA", "OSCILLIEZ", "OSCILLONS", "OSERAIENT", "OSIDIQUES", "OSIRIENNE", "OSMOLYTES", "OSMOMETRE", "OSMOTIQUE", "OSSATURES", "OSSEMENTS", "OSSIFIAIS", "OSSIFIAIT", "OSSIFIANT", "OSSIFIEES", "OSSIFIENT", "OSSIFIERA", "OSSIFIIEZ", "OSSIFIONS", "OSSOBUCOS", "OSSUAIRES", "OSTEALGIE", "OSTENSION", "OSTENSOIR", "OSTEOCYTE", "OSTEOLYSE", "OSTINATOS", "OSTRACEES", "OSTRACISA", "OSTRACISE", "OSTRACODE", "OSTRACONS", "OSTREIDES", "OSTROGOTE", "OSTROGOTH", "OSTROGOTS", "OTASSIONS", "OTERAIENT", "OTITIQUES", "OTOCYSTES", "OTOLITHES", "OTOLOGIES", "OTORHINOS", "OTORRAGIE", "OTORRHEES", "OTOSCOPES", "OTOSCOPIE", "OTTOMANES", "OTTONIENS", "OUABAINES", "OUAOUARON", "OUATAIENT", "OUATASSES", "OUATERAIS", "OUATERAIT", "OUATERENT", "OUATERIEZ", "OUATERONS", "OUATERONT", "OUATEUSES", "OUATINAIS", "OUATINAIT", "OUATINANT", "OUATINEES", "OUATINENT", "OUATINERA", "OUATINIEZ", "OUATINONS", "OUBLIABLE", "OUBLIAMES", "OUBLIASSE", "OUBLIATES", "OUBLIERAI", "OUBLIERAS", "OUBLIEREZ", "OUBLIETTE", "OUBLIEUSE", "OUBLIIONS", "OUGANDAIS", "OUGRIENNE", "OUIGHOURS", "OUILLAGES", "OUILLAMES", "OUILLASSE", "OUILLATES", "OUILLERAI", "OUILLERAS", "OUILLERES", "OUILLEREZ", "OUILLIERE", "OUILLIONS", "OUIRAIENT", "OUISSIONS", "OUISTITIS", "OULIPIENS", "OURALIENS", "OURDIRAIS", "OURDIRAIT", "OURDIRENT", "OURDIRIEZ", "OURDIRONS", "OURDIRONT", "OURDISSES", "OURDISSEZ", "OURLAIENT", "OURLASSES", "OURLERAIS", "OURLERAIT", "OURLERENT", "OURLERIEZ", "OURLERONS", "OURLERONT", "OURLEUSES", "OURLIENNE", "OURSONNES", "OUTAOUAIS", "OUTARDEAU", "OUTILLAGE", "OUTILLAIS", "OUTILLAIT", "OUTILLANT", "OUTILLEES", "OUTILLENT", "OUTILLERA", "OUTILLEUR", "OUTILLIEZ", "OUTILLONS", "OUTRAGEAI", "OUTRAGEAS", "OUTRAGEAT", "OUTRAGEES", "OUTRAGENT", "OUTRAGERA", "OUTRAGEUX", "OUTRAGIEZ", "OUTRAIENT", "OUTRANCES", "OUTRASSES", "OUTREMERS", "OUTRERAIS", "OUTRERAIT", "OUTRERENT", "OUTRERIEZ", "OUTRERONS", "OUTRERONT", "OUTRIGGER", "OUTSIDERS", "OUTSIDEUR", "OUVERTURE", "OUVRABLES", "OUVRAGEAI", "OUVRAGEAS", "OUVRAGEAT", "OUVRAGEES", "OUVRAGENT", "OUVRAGERA", "OUVRAGIEZ", "OUVRAIENT", "OUVRAISON", "OUVRANTES", "OUVRASSES", "OUVRERAIS", "OUVRERAIT", "OUVRERENT", "OUVRERIEZ", "OUVRERONS", "OUVRERONT", "OUVREUSES", "OUVRIERES", "OUVRIRAIS", "OUVRIRAIT", "OUVRIRENT", "OUVRIRIEZ", "OUVRIRONS", "OUVRIRONT", "OUVRISSES", "OVALAIRES", "OVALISAIS", "OVALISAIT", "OVALISANT", "OVALISEES", "OVALISENT", "OVALISERA", "OVALISIEZ", "OVALISONS", "OVARIENNE", "OVATIONNA", "OVATIONNE", "OVERDOSES", "OVERDRIVE", "OVIDUCTES", "OVIPARITE", "OVISCAPTE", "OVOGENESE", "OVOIDALES", "OVOTESTIS", "OVULAIENT", "OVULAIRES", "OVULASSES", "OVULATION", "OVULERAIS", "OVULERAIT", "OVULERENT", "OVULERIEZ", "OVULERONS", "OVULERONT", "OXALIQUES", "OXAZEPAMS", "OXFORDIEN", "OXYCODONE", "OXYDABLES", "OXYDAIENT", "OXYDANTES", "OXYDASSES", "OXYDATIFS", "OXYDATION", "OXYDATIVE", "OXYDERAIS", "OXYDERAIT", "OXYDERENT", "OXYDERIEZ", "OXYDERONS", "OXYDERONT", "OXYGENAIS", "OXYGENAIT", "OXYGENANT", "OXYGENASE", "OXYGENEES", "OXYGENENT", "OXYGENERA", "OXYGENIEZ", "OXYGENONS", "OXYLITHES", "OXYMETRES", "OXYMETRIE", "OXYMORONS", "OXYOLOGIE", "OXYRHINES", "OXYUROSES", "OZOCERITE", "OZOKERITE", "OZONAIENT", "OZONASSES", "OZONATION", "OZONERAIS", "OZONERAIT", "OZONERENT", "OZONERIEZ", "OZONERONS", "OZONERONT", "OZONISAIS", "OZONISAIT", "OZONISANT", "OZONISEES", "OZONISENT", "OZONISERA", "OZONISEUR", "OZONISIEZ", "OZONISONS"
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});