import Configuration from "./entites/configuration";
import PanelManager from "./panelManager";
import Sauvegardeur from "./sauvegardeur";

export default class ReglesPanel {
  private readonly _panelManager: PanelManager;
  private readonly _rulesBouton: HTMLElement;

  public constructor(panelManager: PanelManager) {
    this._panelManager = panelManager;
    this._rulesBouton = document.getElementById("configuration-regles-bouton") as HTMLElement;

    this._rulesBouton.addEventListener(
      "click",
      (() => {
        this.afficher();
      }).bind(this)
    );
  }

  public afficher(): void {
    let titre = "Règles";
    let contenu =
      "<p>" +
      "Vous avez six essais pour deviner le mot romand du jour, entre 6 et 9 lettres.<br />" +
      "Vous ne pouvez proposer que des mots commençant par la même lettre que le mot recherché, et qui se trouvent dans notre dictionnaire bien de chez nous [🇨🇭]<br />" +
      "Les noms propres et les gentilés ne sont pas acceptés.<br />" +
      "Le mot change chaque jour. Évitez donc les spoils et préférez le bouton de partage.<br />" +
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
      "</table>" +
      "Les lettres entourées d'un carré rouge sont à la bonne place,<br />" +
      "les lettres entourées d'un cercle jaune ne sont pas à la bonne place (mais présentes dans le mot !).<br />" +
      "Les lettres qui restent sur fond bleu ne sont pas dans le mot.<br />" +
      "</div>" +
      "<p>" +
      'Devine voir ! s’inspire des superbes Motchus (@MedericGC) et Sutom (@Jonamaths), basés sur Wordle et le regretté Motus.' +
      'Les mots à deviner ainsi que leurs définitions sont tirés du Dictionnaire suisse romand des Éditions Zoé.' +
      'Solution d’hier<br />' +
      'Batoille<br />' +
      "1. Personne bavarde. 2. Faconde, élocution rapide et abbondante.<br />" +
      'Aussi batouille dans les cantons de Neuchâtel et Jura.' +
      '« Tu m’avais dit qu’elle était muette, mais je peux t’assurer que pour une batoille, c’est une batoille ! » (E. Gardaz, Oin-oin et ses nouvelles histoires, 1973, p.191)' +
      "</p>";

    this._panelManager.setContenu(titre, contenu);
    this._panelManager.setClasses(["regles-panel"]);
    this._panelManager.setCallbackFermeture(() => {
      Sauvegardeur.sauvegarderConfig({
        ...(Sauvegardeur.chargerConfig() ?? Configuration.Default),
        afficherRegles: false,
      });
    });
    this._panelManager.afficherPanel();
  }
}
