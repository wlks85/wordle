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
        ListeMotsProposables.Dictionnaire = ["IAMBIQUES", "IANTHINES", "IATROGENE", "IBERIQUES", "ICAQUIERS", "ICARIENNE", "ICAUNAISE", "ICEFIELDS", "ICESHELFS", "ICHNEUMON", "ICHOREUSE", "ICHTYOIDE", "ICHTYOSES", "ICONICITE", "ICONIQUES", "ICONOGENE", "ICOSAEDRE", "ICTERIQUE", "IDEALISAI", "IDEALISAS", "IDEALISAT", "IDEALISEE", "IDEALISER", "IDEALISES", "IDEALISEZ", "IDEALISME", "IDEALISTE", "IDEALITES", "IDEATIONS", "IDENTIFIA", "IDENTIFIE", "IDENTIQUE", "IDENTITES", "IDEOLOGIE", "IDEOLOGUE", "IDEOTYPES", "IDIOLECTE", "IDIOPHONE", "IDIOTIFIA", "IDIOTIFIE", "IDIOTISAI", "IDIOTISAS", "IDIOTISAT", "IDIOTISEE", "IDIOTISER", "IDIOTISES", "IDIOTISEZ", "IDIOTISME", "IDIOTYPES", "IDOLATRAI", "IDOLATRAS", "IDOLATRAT", "IDOLATREE", "IDOLATRER", "IDOLATRES", "IDOLATREZ", "IDOLATRIE", "IDYLLIQUE", "IGNARERIE", "IGNICOLES", "IGNIFUGEA", "IGNIFUGEE", "IGNIFUGER", "IGNIFUGES", "IGNIFUGEZ", "IGNIGENES", "IGNITEURS", "IGNITIONS", "IGNIVOMES", "IGNOMINIE", "IGNORAMES", "IGNORANCE", "IGNORANTE", "IGNORANTS", "IGNORASSE", "IGNORATES", "IGNORERAI", "IGNORERAS", "IGNOREREZ", "IGNORIONS", "IGUANODON", "ILICACEES", "ILLATIVES", "ILLEGALES", "ILLETTREE", "ILLETTRES", "ILLIBERAL", "ILLICEITE", "ILLICITES", "ILLIMITEE", "ILLIMITES", "ILLIQUIDE", "ILLISIBLE", "ILLOGIQUE", "ILLOGISME", "ILLUMINAI", "ILLUMINAS", "ILLUMINAT", "ILLUMINEE", "ILLUMINER", "ILLUMINES", "ILLUMINEZ", "ILLUSIONS", "ILLUSOIRE", "ILLUSTRAI", "ILLUSTRAS", "ILLUSTRAT", "ILLUSTREE", "ILLUSTRER", "ILLUSTRES", "ILLUSTREZ", "ILLUVIALE", "ILLUVIAUX", "ILLUVIUMS", "ILLYRIENS", "ILMENITES", "ILOTIERES", "ILOTISMES", "IMAGEAMES", "IMAGEASSE", "IMAGEATES", "IMAGERAIS", "IMAGERAIT", "IMAGERENT", "IMAGERIES", "IMAGERIEZ", "IMAGERONS", "IMAGERONT", "IMAGEUSES", "IMAGIERES", "IMAGINAIS", "IMAGINAIT", "IMAGINALE", "IMAGINANT", "IMAGINAUX", "IMAGINEES", "IMAGINENT", "IMAGINERA", "IMAGINIEZ", "IMAGINONS", "IMAGISMES", "IMAGISTES", "IMAGOIQUE", "IMBECILES", "IMBIBAMES", "IMBIBASSE", "IMBIBATES", "IMBIBERAI", "IMBIBERAS", "IMBIBEREZ", "IMBIBIONS", "IMBITABLE", "IMBRIQUAI", "IMBRIQUAS", "IMBRIQUAT", "IMBRIQUEE", "IMBRIQUER", "IMBRIQUES", "IMBRIQUEZ", "IMBROGLIO", "IMBRULEES", "IMBUVABLE", "IMIDAZOLE", "IMITABLES", "IMITAIENT", "IMITASSES", "IMITATEUR", "IMITATIFS", "IMITATION", "IMITATIVE", "IMITERAIS", "IMITERAIT", "IMITERENT", "IMITERIEZ", "IMITERONS", "IMITERONT", "IMMACULEE", "IMMACULES", "IMMANENCE", "IMMANENTE", "IMMANENTS", "IMMATURES", "IMMEDIATE", "IMMEDIATS", "IMMENSITE", "IMMERGEAI", "IMMERGEAS", "IMMERGEAT", "IMMERGEES", "IMMERGENT", "IMMERGERA", "IMMERGIEZ", "IMMERITEE", "IMMERITES", "IMMERSIFS", "IMMERSION", "IMMERSIVE", "IMMEUBLES", "IMMIGRAIS", "IMMIGRAIT", "IMMIGRANT", "IMMIGREES", "IMMIGRENT", "IMMIGRERA", "IMMIGRIEZ", "IMMIGRONS", "IMMINENCE", "IMMINENTE", "IMMINENTS", "IMMISCAIS", "IMMISCAIT", "IMMISCANT", "IMMISCEES", "IMMISCENT", "IMMISCERA", "IMMISCIEZ", "IMMISCONS", "IMMIXTION", "IMMOBILES", "IMMODEREE", "IMMODERES", "IMMODESTE", "IMMOLAMES", "IMMOLASSE", "IMMOLATES", "IMMOLERAI", "IMMOLERAS", "IMMOLEREZ", "IMMOLIONS", "IMMONDICE", "IMMORALES", "IMMORTELS", "IMMOTIQUE", "IMMOTIVEE", "IMMOTIVES", "IMMUABLES", "IMMUNISAI", "IMMUNISAS", "IMMUNISAT", "IMMUNISEE", "IMMUNISER", "IMMUNISES", "IMMUNISEZ", "IMMUNITES", "IMPACTAIS", "IMPACTAIT", "IMPACTANT", "IMPACTEES", "IMPACTENT", "IMPACTERA", "IMPACTEUR", "IMPACTIEZ", "IMPACTION", "IMPACTITE", "IMPACTONS", "IMPALUDEE", "IMPALUDES", "IMPARABLE", "IMPARFAIT", "IMPARITES", "IMPARTIAL", "IMPARTIES", "IMPATIENS", "IMPATIENT", "IMPATRIEE", "IMPATRIES", "IMPAVIDES", "IMPAYABLE", "IMPEDANCE", "IMPEDANTE", "IMPEDANTS", "IMPENSEES", "IMPERATIF", "IMPERFORE", "IMPERIALE", "IMPERIAUX", "IMPERIEUX", "IMPERITIE", "IMPERIUMS", "IMPETIGOS", "IMPETRAIS", "IMPETRAIT", "IMPETRANT", "IMPETREES", "IMPETRENT", "IMPETRERA", "IMPETRIEZ", "IMPETRONS", "IMPETUEUX", "IMPLANTAI", "IMPLANTAS", "IMPLANTAT", "IMPLANTEE", "IMPLANTER", "IMPLANTES", "IMPLANTEZ", "IMPLICITE", "IMPLIQUAI", "IMPLIQUAS", "IMPLIQUAT", "IMPLIQUEE", "IMPLIQUER", "IMPLIQUES", "IMPLIQUEZ", "IMPLORAIS", "IMPLORAIT", "IMPLORANT", "IMPLOREES", "IMPLORENT", "IMPLORERA", "IMPLORIEZ", "IMPLORONS", "IMPLOSAIS", "IMPLOSAIT", "IMPLOSANT", "IMPLOSEES", "IMPLOSENT", "IMPLOSERA", "IMPLOSIEZ", "IMPLOSIFS", "IMPLOSION", "IMPLOSIVE", "IMPLOSONS", "IMPLUVIUM", "IMPONDERE", "IMPORTAIS", "IMPORTAIT", "IMPORTANT", "IMPORTEES", "IMPORTENT", "IMPORTERA", "IMPORTIEZ", "IMPORTONS", "IMPORTUNA", "IMPORTUNE", "IMPORTUNS", "IMPOSABLE", "IMPOSAMES", "IMPOSANTE", "IMPOSANTS", "IMPOSASSE", "IMPOSATES", "IMPOSERAI", "IMPOSERAS", "IMPOSEREZ", "IMPOSEURS", "IMPOSEUSE", "IMPOSIONS", "IMPOSTEUR", "IMPOSTURE", "IMPOTENCE", "IMPOTENTE", "IMPOTENTS", "IMPRECISE", "IMPREGNAI", "IMPREGNAS", "IMPREGNAT", "IMPREGNEE", "IMPREGNER", "IMPREGNES", "IMPREGNEZ", "IMPREPARE", "IMPRESSIF", "IMPREVUES", "IMPRIMAIS", "IMPRIMAIT", "IMPRIMANT", "IMPRIMEES", "IMPRIMENT", "IMPRIMERA", "IMPRIMEUR", "IMPRIMIEZ", "IMPRIMONS", "IMPROBITE", "IMPROMPTU", "IMPROPRES", "IMPROUVAI", "IMPROUVAS", "IMPROUVAT", "IMPROUVEE", "IMPROUVER", "IMPROUVES", "IMPROUVEZ", "IMPROVISA", "IMPROVISE", "IMPRUDENT", "IMPUBERES", "IMPUBERTE", "IMPUBLIEE", "IMPUBLIES", "IMPUDENCE", "IMPUDENTE", "IMPUDENTS", "IMPUDEURS", "IMPUDIQUE", "IMPULSAIS", "IMPULSAIT", "IMPULSANT", "IMPULSEES", "IMPULSENT", "IMPULSERA", "IMPULSIEZ", "IMPULSIFS", "IMPULSION", "IMPULSIVE", "IMPULSONS", "IMPUNITES", "IMPURETES", "IMPUTABLE", "IMPUTAMES", "IMPUTASSE", "IMPUTATES", "IMPUTERAI", "IMPUTERAS", "IMPUTEREZ", "IMPUTIONS", "INABORDEE", "INABORDES", "INABOUTIE", "INABOUTIS", "INABRITEE", "INABRITES", "INACCEPTE", "INACCORDS", "INACHEVEE", "INACHEVES", "INACTIONS", "INACTIVAI", "INACTIVAS", "INACTIVAT", "INACTIVEE", "INACTIVER", "INACTIVES", "INACTIVEZ", "INACTUELS", "INADAPTEE", "INADAPTES", "INADEQUAT", "INALTEREE", "INALTERES", "INAMICALE", "INAMICAUX", "INANIMEES", "INANITION", "INAPAISEE", "INAPAISES", "INAPERCUE", "INAPERCUS", "INASSOUVI", "INATTAQUE", "INATTENDU", "INAUDIBLE", "INAUGURAI", "INAUGURAL", "INAUGURAS", "INAUGURAT", "INAUGUREE", "INAUGURER", "INAUGURES", "INAUGUREZ", "INAVOUEES", "INCANTAIS", "INCANTAIT", "INCANTANT", "INCANTEES", "INCANTENT", "INCANTERA", "INCANTIEZ", "INCANTONS", "INCAPABLE", "INCARCERA", "INCARCERE", "INCARDINE", "INCARNAIS", "INCARNAIT", "INCARNANT", "INCARNATE", "INCARNATS", "INCARNEES", "INCARNENT", "INCARNERA", "INCARNIEZ", "INCARNONS", "INCARTADE", "INCASABLE", "INCASIQUE", "INCENDIAI", "INCENDIAS", "INCENDIAT", "INCENDIEE", "INCENDIER", "INCENDIES", "INCENDIEZ", "INCERTAIN", "INCESSANT", "INCHANGEE", "INCHANGES", "INCHOATIF", "INCIDENCE", "INCIDENTA", "INCIDENTE", "INCIDENTS", "INCINERAI", "INCINERAS", "INCINERAT", "INCINEREE", "INCINERER", "INCINERES", "INCINEREZ", "INCISAMES", "INCISASSE", "INCISATES", "INCISERAI", "INCISERAS", "INCISEREZ", "INCISEURS", "INCISIONS", "INCISIVES", "INCISURES", "INCITAMES", "INCITANTE", "INCITANTS", "INCITASSE", "INCITATES", "INCITATIF", "INCITERAI", "INCITERAS", "INCITEREZ", "INCITIONS", "INCIVILES", "INCIVIQUE", "INCIVISME", "INCLEMENT", "INCLINAIS", "INCLINAIT", "INCLINANT", "INCLINEES", "INCLINENT", "INCLINERA", "INCLINIEZ", "INCLINONS", "INCLUIONS", "INCLURAIS", "INCLURAIT", "INCLURENT", "INCLURIEZ", "INCLURONS", "INCLURONT", "INCLUSIFS", "INCLUSION", "INCLUSIVE", "INCLUSSES", "INCOGNITA", "INCOGNITO", "INCOLORES", "INCOMBAIT", "INCOMBANT", "INCOMBENT", "INCOMBERA", "INCOMMODA", "INCOMMODE", "INCOMMODO", "INCOMPLET", "INCOMPRIS", "INCONFORT", "INCONGRUE", "INCONGRUS", "INCONNUES", "INCONQUIS", "INCONSOLE", "INCORPORA", "INCORPORE", "INCORRECT", "INCOTERMS", "INCREDULE", "INCREMENT", "INCRIMINA", "INCRIMINE", "INCROYANT", "INCRUSTAI", "INCRUSTAS", "INCRUSTAT", "INCRUSTEE", "INCRUSTER", "INCRUSTES", "INCRUSTEZ", "INCUBAMES", "INCUBASSE", "INCUBATES", "INCUBERAI", "INCUBERAS", "INCUBEREZ", "INCUBIONS", "INCULPAIS", "INCULPAIT", "INCULPANT", "INCULPEES", "INCULPENT", "INCULPERA", "INCULPIEZ", "INCULPONS", "INCULQUAI", "INCULQUAS", "INCULQUAT", "INCULQUEE", "INCULQUER", "INCULQUES", "INCULQUEZ", "INCULTIVE", "INCULTURE", "INCUNABLE", "INCURABLE", "INCURIEUX", "INCURSION", "INCURVAIS", "INCURVAIT", "INCURVANT", "INCURVEES", "INCURVENT", "INCURVERA", "INCURVIEZ", "INCURVONS", "INDAGUAIS", "INDAGUAIT", "INDAGUANT", "INDAGUENT", "INDAGUERA", "INDAGUIEZ", "INDAGUONS", "INDATABLE", "INDECENCE", "INDECENTE", "INDECENTS", "INDECISES", "INDEFINIE", "INDEFINIS", "INDELICAT", "INDEMNISA", "INDEMNISE", "INDEMNITE", "INDENTAIS", "INDENTAIT", "INDENTANT", "INDENTEES", "INDENTENT", "INDENTERA", "INDENTIEZ", "INDENTONS", "INDEPASSE", "INDESIREE", "INDESIRES", "INDEXABLE", "INDEXAGES", "INDEXAMES", "INDEXASSE", "INDEXATES", "INDEXERAI", "INDEXERAS", "INDEXEREZ", "INDEXIONS", "INDIANITE", "INDICAGES", "INDICAMES", "INDICASSE", "INDICATES", "INDICATIF", "INDICERAI", "INDICERAS", "INDICEREZ", "INDICIBLE", "INDICIELS", "INDICIONS", "INDICTION", "INDIENNES", "INDIFFERA", "INDIFFERE", "INDIGENAT", "INDIGENCE", "INDIGENES", "INDIGENTE", "INDIGENTS", "INDIGESTE", "INDIGETES", "INDIGNAIS", "INDIGNAIT", "INDIGNANT", "INDIGNEES", "INDIGNENT", "INDIGNERA", "INDIGNIEZ", "INDIGNITE", "INDIGNONS", "INDIQUAIS", "INDIQUAIT", "INDIQUANT", "INDIQUEES", "INDIQUENT", "INDIQUERA", "INDIQUIEZ", "INDIQUONS", "INDIRECTE", "INDIRECTS", "INDISCRET", "INDISCUTE", "INDISPOSA", "INDISPOSE", "INDIVIDUA", "INDIVIDUE", "INDIVIDUS", "INDIVISES", "INDOCILES", "INDOLENCE", "INDOLENTE", "INDOLENTS", "INDOLIQUE", "INDOLORES", "INDOMPTEE", "INDOMPTES", "INDOUISME", "INDOUISTE", "INDUCTEUR", "INDUCTIFS", "INDUCTION", "INDUCTIVE", "INDUIRAIS", "INDUIRAIT", "INDUIRIEZ", "INDUIRONS", "INDUIRONT", "INDUISAIS", "INDUISAIT", "INDUISANT", "INDUISENT", "INDUISIEZ", "INDUISONS", "INDULGENT", "INDULINES", "INDURAMES", "INDURASSE", "INDURATES", "INDURERAI", "INDURERAS", "INDUREREZ", "INDURIONS", "INDUSTRIE", "INEBRANLE", "INECOUTEE", "INECOUTES", "INEDUQUEE", "INEDUQUES", "INEFFABLE", "INEGALEES", "INEGALITE", "INELEGANT", "INEMPLOIS", "INEMPLOYE", "INENTAMEE", "INENTAMES", "INENTENDU", "INEPROUVE", "INEPUISEE", "INEPUISES", "INERTAGES", "INERTIELS", "INESPEREE", "INESPERES", "INESPOIRS", "INETENDUE", "INETENDUS", "INEXACTES", "INEXAUCEE", "INEXAUCES", "INEXECUTE", "INEXERCEE", "INEXERCES", "INEXPERTE", "INEXPERTS", "INEXPIEES", "INEXPLORE", "INEXPRIME", "INFAMANTE", "INFAMANTS", "INFANTILE", "INFARCTUS", "INFATUAIS", "INFATUAIT", "INFATUANT", "INFATUEES", "INFATUENT", "INFATUERA", "INFATUIEZ", "INFATUONS", "INFECONDE", "INFECONDS", "INFECTAIS", "INFECTAIT", "INFECTANT", "INFECTEES", "INFECTENT", "INFECTERA", "INFECTIEZ", "INFECTION", "INFECTONS", "INFEODAIS", "INFEODAIT", "INFEODANT", "INFEODEES", "INFEODENT", "INFEODERA", "INFEODIEZ", "INFEODONS", "INFERAMES", "INFERASSE", "INFERATES", "INFERENCE", "INFERERAI", "INFERERAS", "INFEREREZ", "INFERIEUR", "INFERIONS", "INFERNALE", "INFERNAUX", "INFERTILE", "INFESTAIS", "INFESTAIT", "INFESTANT", "INFESTEES", "INFESTENT", "INFESTERA", "INFESTIEZ", "INFESTONS", "INFICHUES", "INFIDELES", "INFILTRAI", "INFILTRAS", "INFILTRAT", "INFILTREE", "INFILTRER", "INFILTRES", "INFILTREZ", "INFINITES", "INFINITIF", "INFINITUM", "INFIRMAIS", "INFIRMAIT", "INFIRMANT", "INFIRMEES", "INFIRMENT", "INFIRMERA", "INFIRMIER", "INFIRMIEZ", "INFIRMITE", "INFIRMONS", "INFLATION", "INFLECHIE", "INFLECHIR", "INFLECHIS", "INFLECHIT", "INFLEXION", "INFLIGEAI", "INFLIGEAS", "INFLIGEAT", "INFLIGEES", "INFLIGENT", "INFLIGERA", "INFLIGIEZ", "INFLUAMES", "INFLUASSE", "INFLUATES", "INFLUENCA", "INFLUENCE", "INFLUENTE", "INFLUENTS", "INFLUENZA", "INFLUERAI", "INFLUERAS", "INFLUEREZ", "INFLUIONS", "INFOBULLE", "INFOGERAI", "INFOGERAS", "INFOGERAT", "INFOGEREE", "INFOGERER", "INFOGERES", "INFOGEREZ", "INFONDEES", "INFORMAIS", "INFORMAIT", "INFORMANT", "INFORMEES", "INFORMELS", "INFORMENT", "INFORMERA", "INFORMIEZ", "INFORMITE", "INFORMONS", "INFORMULE", "INFOROUTE", "INFORTUNE", "INFOUTUES", "INFRADIEN", "INFRASONS", "INFUMABLE", "INFUSAMES", "INFUSASSE", "INFUSATES", "INFUSERAI", "INFUSERAS", "INFUSEREZ", "INFUSIBLE", "INFUSIONS", "INFUSOIRE", "INGENIAIS", "INGENIAIT", "INGENIANT", "INGENIEES", "INGENIENT", "INGENIERA", "INGENIEUR", "INGENIEUX", "INGENIIEZ", "INGENIONS", "INGENUITE", "INGERABLE", "INGERAMES", "INGERASSE", "INGERATES", "INGERENCE", "INGERERAI", "INGERERAS", "INGEREREZ", "INGERIONS", "INGESTION", "INGRESSIF", "INGUINALE", "INGUINAUX", "INGURGITA", "INGURGITE", "INHABILES", "INHABITEE", "INHABITES", "INHALAMES", "INHALASSE", "INHALATES", "INHALERAI", "INHALERAS", "INHALEREZ", "INHALIONS", "INHERENCE", "INHERENTE", "INHERENTS", "INHIBAMES", "INHIBASSE", "INHIBATES", "INHIBERAI", "INHIBERAS", "INHIBEREZ", "INHIBIONS", "INHIBITIF", "INHUMAINE", "INHUMAINS", "INHUMAMES", "INHUMASSE", "INHUMATES", "INHUMERAI", "INHUMERAS", "INHUMEREZ", "INHUMIONS", "INIMAGINE", "INIMITEES", "INIMITIES", "ININTERET", "INIQUITES", "INITIALAI", "INITIALAS", "INITIALAT", "INITIALEE", "INITIALER", "INITIALES", "INITIALEZ", "INITIAMES", "INITIASSE", "INITIATES", "INITIERAI", "INITIERAS", "INITIEREZ", "INITIIONS", "INJECTAIS", "INJECTAIT", "INJECTANT", "INJECTEES", "INJECTENT", "INJECTERA", "INJECTEUR", "INJECTIEZ", "INJECTIFS", "INJECTION", "INJECTIVE", "INJECTONS", "INJONCTIF", "INJOUABLE", "INJURIAIS", "INJURIAIT", "INJURIANT", "INJURIEES", "INJURIENT", "INJURIERA", "INJURIEUX", "INJURIIEZ", "INJURIONS", "INJUSTICE", "INLANDSIS", "INNEISMES", "INNEISTES", "INNERVAIS", "INNERVAIT", "INNERVANT", "INNERVEES", "INNERVENT", "INNERVERA", "INNERVIEZ", "INNERVONS", "INNOCENCE", "INNOCENTA", "INNOCENTE", "INNOCENTS", "INNOCUITE", "INNOMINEE", "INNOMINES", "INNOMMEES", "INNOVAMES", "INNOVANTE", "INNOVANTS", "INNOVASSE", "INNOVATES", "INNOVERAI", "INNOVERAS", "INNOVEREZ", "INNOVIONS", "INOBSERVE", "INOCCUPEE", "INOCCUPES", "INOCTAVOS", "INOCULAIS", "INOCULAIT", "INOCULANT", "INOCULEES", "INOCULENT", "INOCULERA", "INOCULIEZ", "INOCULONS", "INOCULUMS", "INONDABLE", "INONDAMES", "INONDASSE", "INONDATES", "INONDERAI", "INONDERAS", "INONDEREZ", "INONDIONS", "INOPERANT", "INOPINEES", "INOSITOLS", "INOTROPES", "INOUBLIEE", "INOUBLIES", "INQUARTOS", "INQUIETAI", "INQUIETAS", "INQUIETAT", "INQUIETEE", "INQUIETER", "INQUIETES", "INQUIETEZ", "INRATABLE", "INRAYABLE", "INSALUBRE", "INSANITES", "INSATUREE", "INSATURES", "INSCRIRAI", "INSCRIRAS", "INSCRIREZ", "INSCRITES", "INSCRIVES", "INSCRIVEZ", "INSCRIVIS", "INSCRIVIT", "INSCULPAI", "INSCULPAS", "INSCULPAT", "INSCULPEE", "INSCULPER", "INSCULPES", "INSCULPEZ", "INSECABLE", "INSECURES", "INSELBERG", "INSEMINAI", "INSEMINAS", "INSEMINAT", "INSEMINEE", "INSEMINER", "INSEMINES", "INSEMINEZ", "INSENSEES", "INSERABLE", "INSERAMES", "INSERASSE", "INSERATES", "INSERERAI", "INSERERAS", "INSEREREZ", "INSERIONS", "INSERTION", "INSIDIEUX", "INSINCERE", "INSINUAIS", "INSINUAIT", "INSINUANT", "INSINUEES", "INSINUENT", "INSINUERA", "INSINUIEZ", "INSINUONS", "INSIPIDES", "INSISTAIS", "INSISTAIT", "INSISTANT", "INSISTENT", "INSISTERA", "INSISTIEZ", "INSISTONS", "INSOLAMES", "INSOLASSE", "INSOLATES", "INSOLENCE", "INSOLENTE", "INSOLENTS", "INSOLERAI", "INSOLERAS", "INSOLEREZ", "INSOLIONS", "INSOLITES", "INSOLUBLE", "INSOMNIES", "INSONDEES", "INSONORES", "INSOUMISE", "INSPECTAI", "INSPECTAS", "INSPECTAT", "INSPECTEE", "INSPECTER", "INSPECTES", "INSPECTEZ", "INSPIRAIS", "INSPIRAIT", "INSPIRANT", "INSPIREES", "INSPIRENT", "INSPIRERA", "INSPIRIEZ", "INSPIRONS", "INSTABLES", "INSTALLAI", "INSTALLAS", "INSTALLAT", "INSTALLEE", "INSTALLER", "INSTALLES", "INSTALLEZ", "INSTANCES", "INSTANCIA", "INSTANCIE", "INSTANTES", "INSTANTON", "INSTAURAI", "INSTAURAS", "INSTAURAT", "INSTAUREE", "INSTAURER", "INSTAURES", "INSTAUREZ", "INSTIGUAI", "INSTIGUAS", "INSTIGUAT", "INSTIGUEE", "INSTIGUER", "INSTIGUES", "INSTIGUEZ", "INSTILLAI", "INSTILLAS", "INSTILLAT", "INSTILLEE", "INSTILLER", "INSTILLES", "INSTILLEZ", "INSTINCTS", "INSTITUAI", "INSTITUAS", "INSTITUAT", "INSTITUEE", "INSTITUER", "INSTITUES", "INSTITUEZ", "INSTITUTS", "INSTRUIRA", "INSTRUIRE", "INSTRUISE", "INSTRUITE", "INSTRUITS", "INSUFFLAI", "INSUFFLAS", "INSUFFLAT", "INSUFFLEE", "INSUFFLER", "INSUFFLES", "INSUFFLEZ", "INSULAIRE", "INSULINES", "INSULTAIS", "INSULTAIT", "INSULTANT", "INSULTEES", "INSULTENT", "INSULTERA", "INSULTEUR", "INSULTIEZ", "INSULTONS", "INSURGEAI", "INSURGEAS", "INSURGEAT", "INSURGEES", "INSURGENT", "INSURGERA", "INSURGIEZ", "INTACTILE", "INTAILLAI", "INTAILLAS", "INTAILLAT", "INTAILLEE", "INTAILLER", "INTAILLES", "INTAILLEZ", "INTEGRAIS", "INTEGRAIT", "INTEGRALE", "INTEGRANT", "INTEGRAUX", "INTEGREES", "INTEGRENT", "INTEGRERA", "INTEGRIEZ", "INTEGRITE", "INTEGRONS", "INTELLECT", "INTENABLE", "INTENDANT", "INTENSIFS", "INTENSION", "INTENSITE", "INTENSIVE", "INTENTAIS", "INTENTAIT", "INTENTANT", "INTENTEES", "INTENTENT", "INTENTERA", "INTENTIEZ", "INTENTION", "INTENTONS", "INTERAGIE", "INTERAGIR", "INTERAGIS", "INTERAGIT", "INTERCALA", "INTERCALE", "INTERCEDA", "INTERCEDE", "INTERCITE", "INTERCLUB", "INTERDIRA", "INTERDIRE", "INTERDISE", "INTERDITE", "INTERDITS", "INTERESSA", "INTERESSE", "INTERFACA", "INTERFACE", "INTERFERA", "INTERFERE", "INTERIEUR", "INTERJETA", "INTERJETE", "INTERLOCK", "INTERLOPE", "INTERLUDE", "INTERMEDE", "INTERNAIS", "INTERNAIT", "INTERNANT", "INTERNATS", "INTERNEES", "INTERNENT", "INTERNERA", "INTERNETS", "INTERNIEZ", "INTERNONS", "INTERPELA", "INTERPELE", "INTERPOLA", "INTERPOLE", "INTERPOSA", "INTERPOSE", "INTERROGE", "INTERROIS", "INTERSEXE", "INTERVENU", "INTERVIEW", "INTERVINS", "INTERVINT", "INTERZONE", "INTESTATS", "INTESTINE", "INTESTINS", "INTIFADAS", "INTIMAMES", "INTIMASSE", "INTIMATES", "INTIMERAI", "INTIMERAS", "INTIMEREZ", "INTIMIDAI", "INTIMIDAS", "INTIMIDAT", "INTIMIDEE", "INTIMIDER", "INTIMIDES", "INTIMIDEZ", "INTIMIONS", "INTIMISME", "INTIMISTE", "INTIMITES", "INTITULAI", "INTITULAS", "INTITULAT", "INTITULEE", "INTITULER", "INTITULES", "INTITULEZ", "INTOUCHEE", "INTOUCHES", "INTOXIQUA", "INTOXIQUE", "INTRANETS", "INTREPIDE", "INTRIGANT", "INTRIGUAI", "INTRIGUAS", "INTRIGUAT", "INTRIGUEE", "INTRIGUER", "INTRIGUES", "INTRIGUEZ", "INTRIQUAI", "INTRIQUAS", "INTRIQUAT", "INTRIQUEE", "INTRIQUER", "INTRIQUES", "INTRIQUEZ", "INTRODUIS", "INTRODUIT", "INTRONISA", "INTRONISE", "INTRORSES", "INTROUBLE", "INTRUSIFS", "INTRUSION", "INTRUSIVE", "INTUBAMES", "INTUBASSE", "INTUBATES", "INTUBERAI", "INTUBERAS", "INTUBEREZ", "INTUBIONS", "INTUITAIS", "INTUITAIT", "INTUITANT", "INTUITEES", "INTUITENT", "INTUITERA", "INTUITIEZ", "INTUITIFS", "INTUITION", "INTUITIVE", "INTUITONS", "INUKSHUKS", "INUKTITUT", "INUSABLES", "INUSITEES", "INUSUELLE", "INUTILISE", "INUTILITE", "INVAGINAI", "INVAGINAS", "INVAGINAT", "INVAGINEE", "INVAGINER", "INVAGINES", "INVAGINEZ", "INVAINCUE", "INVAINCUS", "INVALIDAI", "INVALIDAS", "INVALIDAT", "INVALIDEE", "INVALIDER", "INVALIDES", "INVALIDEZ", "INVARIANT", "INVASIONS", "INVASIVES", "INVECTIVA", "INVECTIVE", "INVENDUES", "INVENTAIS", "INVENTAIT", "INVENTANT", "INVENTEES", "INVENTENT", "INVENTERA", "INVENTEUR", "INVENTIEZ", "INVENTIFS", "INVENTION", "INVENTIVE", "INVENTONS", "INVERSAIS", "INVERSAIT", "INVERSANT", "INVERSEES", "INVERSENT", "INVERSERA", "INVERSEUR", "INVERSIEZ", "INVERSIFS", "INVERSION", "INVERSIVE", "INVERSONS", "INVERTASE", "INVERTIES", "INVERTINE", "INVERTIRA", "INVESTIES", "INVESTIRA", "INVETERAI", "INVETERAS", "INVETERAT", "INVETEREE", "INVETERER", "INVETERES", "INVETEREZ", "INVIOLEES", "INVISIBLE", "INVITAMES", "INVITANTE", "INVITANTS", "INVITASSE", "INVITATES", "INVITERAI", "INVITERAS", "INVITEREZ", "INVITEURS", "INVITEUSE", "INVITIONS", "INVIVABLE", "INVOCABLE", "INVOLUCRE", "INVOLUTEE", "INVOLUTES", "INVOLUTIF", "INVOQUAIS", "INVOQUAIT", "INVOQUANT", "INVOQUEES", "INVOQUENT", "INVOQUERA", "INVOQUIEZ", "INVOQUONS", "IODASSENT", "IODASSIEZ", "IODATIONS", "IODERIONS", "IODLAIENT", "IODLASSES", "IODLERAIS", "IODLERAIT", "IODLERENT", "IODLERIEZ", "IODLERONS", "IODLERONT", "IODOFORME", "IONIENNES", "IONISABLE", "IONISAMES", "IONISANTE", "IONISANTS", "IONISASSE", "IONISATES", "IONISERAI", "IONISERAS", "IONISEREZ", "IONISIONS", "IOTACISME", "IOULAIENT", "IOULASSES", "IOULERAIS", "IOULERAIT", "IOULERENT", "IOULERIEZ", "IOULERONS", "IOULERONT", "IRAKIENNE", "IRANIENNE", "IRASCIBLE", "IRENIQUES", "IRENISMES", "IRENISTES", "IRIDACEES", "IRIDIENNE", "IRISABLES", "IRISAIENT", "IRISASSES", "IRISATION", "IRISERAIS", "IRISERAIT", "IRISERENT", "IRISERIEZ", "IRISERONS", "IRISERONT", "IRLANDAIS", "IRONIQUES", "IRONISAIS", "IRONISAIT", "IRONISANT", "IRONISENT", "IRONISERA", "IRONISIEZ", "IRONISMES", "IRONISONS", "IRONISTES", "IROQUOISE", "IRRADIAIS", "IRRADIAIT", "IRRADIANT", "IRRADIEES", "IRRADIENT", "IRRADIERA", "IRRADIIEZ", "IRRADIONS", "IRRAISONS", "IRREALISE", "IRREALITE", "IRREELLES", "IRREFUTEE", "IRREFUTES", "IRRESIGNE", "IRRESOLUE", "IRRESOLUS", "IRRESPECT", "IRREVELEE", "IRREVELES", "IRRIGABLE", "IRRIGANTE", "IRRIGANTS", "IRRIGUAIS", "IRRIGUAIT", "IRRIGUANT", "IRRIGUEES", "IRRIGUENT", "IRRIGUERA", "IRRIGUIEZ", "IRRIGUONS", "IRRITABLE", "IRRITAMES", "IRRITANTE", "IRRITANTS", "IRRITASSE", "IRRITATES", "IRRITATIF", "IRRITERAI", "IRRITERAS", "IRRITEREZ", "IRRITIONS", "IRRUPTION", "ISABELLES", "ISARIENNE", "ISCHEMIES", "ISENTROPE", "ISEROISES", "ISLAMIQUE", "ISLAMISAI", "ISLAMISAS", "ISLAMISAT", "ISLAMISEE", "ISLAMISER", "ISLAMISES", "ISLAMISEZ", "ISLAMISME", "ISLAMISTE", "ISLAMITES", "ISLANDAIS", "ISMAELIEN", "ISMAELITE", "ISMAILIEN", "ISOBATHES", "ISOBUTANE", "ISOCARDES", "ISOCARENE", "ISOCHORES", "ISOCHRONE", "ISOCLINAL", "ISOCLINES", "ISOCORTEX", "ISOCRATIE", "ISOENZYME", "ISOFORMES", "ISOGAMIES", "ISOGENIES", "ISOGLOSSE", "ISOGREFFE", "ISOHELIES", "ISOHYETES", "ISOHYPSES", "ISOLABLES", "ISOLAIENT", "ISOLANTES", "ISOLASSES", "ISOLATEUR", "ISOLATION", "ISOLEMENT", "ISOLERAIS", "ISOLERAIT", "ISOLERENT", "ISOLERIEZ", "ISOLERONS", "ISOLERONT", "ISOLOGUES", "ISOMERASE", "ISOMERIES", "ISOMERISA", "ISOMERISE", "ISOMETRIE", "ISOMORPHE", "ISONOMIES", "ISOPERTES", "ISOPHASES", "ISOPIQUES", "ISOPRENES", "ISOPTERES", "ISOPYCNES", "ISOSEISTE", "ISOSISTES", "ISOSPOREE", "ISOSPORES", "ISOSPORIE", "ISOSTASIE", "ISOTHERME", "ISOTONIES", "ISOTOPIES", "ISOTROPES", "ISOTROPIE", "ISRAELIEN", "ISRAELITE", "ISTHMIQUE", "ITALIENNE", "ITALIOTES", "ITALIQUES", "ITERABLES", "ITERAIENT", "ITERASSES", "ITERATEUR", "ITERATIFS", "ITERATION", "ITERATIVE", "ITERERAIS", "ITERERAIT", "ITERERENT", "ITERERIEZ", "ITERERONS", "ITERERONT", "ITINERANT", "IVOIRERIE", "IVOIRIENS", "IVOIRIERE", "IVOIRIERS", "IVOIRINES", "IVOIRISAI", "IVOIRISAS", "IVOIRISAT", "IVOIRISEE", "IVOIRISER", "IVOIRISES", "IVOIRISEZ", "IVOIRITES"
        ];
        return ListeMotsProposables;
    }());
    exports.default = ListeMotsProposables;
});