import { Word } from "./api/entities";
import CopieHelper from "./copieHelper";
import Configuration from "./entites/configuration";
import LettreResultat from "./entites/lettreResultat";
import Gestionnaire from "./gestionnaire";
import { HttpRequestHelper } from "./httpHelper";
import InstanceConfiguration from "./instanceConfiguration";
import PanelManager from "./panelManager";
import Sauvegardeur from "./sauvegardeur";
import StatistiquesDisplayer from "./statistiquesDisplayer";

export default class MotDeDescriptionPanel {
    private readonly _datePartie: Date;
    private readonly _panelManager: PanelManager;
    private readonly _gestionnaire: Gestionnaire;
    private readonly _motDescButton: HTMLElement;
    
    private _motDescription: string;
    private _mot: string;
    private _word: Word | null | undefined;

    public constructor(datePartie: Date, panelManager: PanelManager, gestionnaire: Gestionnaire) {
        this._datePartie = new Date(datePartie);
        this._panelManager = panelManager;
        this._gestionnaire = gestionnaire;
        this._motDescription = "";
        this._mot = "";
        this._word = null;

        this._motDescButton = document.getElementById("mot-description-button") as HTMLElement;
        this._motDescButton
        .addEventListener("click",
        (() => {
            this.afficher();
            
          }).bind(this));
    }

    public async discover(mot: string): Promise<void> {
        this._mot = mot;
        this._word = await this.getWordDescription(mot);
        this._motDescButton.classList.remove("hide");   
    }

    public async afficher() {
        console.trace("Called from.")
        let title: string = "Description du mot";
        const word = this._word?.title ?? "Impossible de trouver les métadonnées des mots";
        const description = this._word?.description ?? "";
        let contents: string = `
        <div class="word-description">
            <div class="word-description title">${word}</div>
            <div class="word-description desc">${description}</div>
        </div>
        `;

        this._panelManager.setContenu(title, contents);
        this._panelManager.afficherPanel();
    }

    private async getWordDescription(word: string) {
        try {
            const response = await HttpRequestHelper(`words/${word}`, {method: 'GET'});
            return response.data;
        } catch (error) {
            return "Could not fetch word description"
        }

    }
}
