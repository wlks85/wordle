import Configuration from "./entites/configuration";
import { Theme } from "./entites/theme";

export default class ThemeManager {
  public constructor(config: Configuration) {
    this.changerCouleur(config.theme ?? Configuration.Default.theme);
  }

  public changerCouleur(theme: Theme): void {
    const root = document.documentElement;
    switch (theme) {
      case Theme.Clair:
      case Theme.ClairAccessible:
        root.style.setProperty("--couleur-fond-rgb", "245, 245, 220");
        root.style.setProperty("--couleur-police", "#000000");
        root.style.setProperty("--couleur-bordure", "rgb(55, 55, 55)");
        root.style.setProperty("--couleur-icone", "rgb(55, 55, 55)");
        root.style.setProperty("--couleur-lettre-speciale", "rgb(210, 210, 210)");
        root.style.setProperty("--couleur-lettre-survole", "rgb(140, 140, 140)");
        root.style.setProperty("--couleur-lettre-speciale-survole", "rgb(140, 140, 140)");
        break;
      default:
        root.style.setProperty("--couleur-fond-rgb", "43, 43, 43");
        root.style.setProperty("--couleur-police", "#ffffff");
        root.style.setProperty("--couleur-bordure", "rgb(200, 200, 200)");
        root.style.setProperty("--couleur-icone", "rgb(200, 200, 200)");
        root.style.setProperty("--couleur-lettre-speciale", "rgb(75, 75, 75)");
        root.style.setProperty("--couleur-lettre-survole", "rgba(75, 75, 75, 0.65)");
        root.style.setProperty("--couleur-lettre-speciale-survole", "rgba(75, 75, 75, 0.65)");
    }
    switch (theme) {
      case Theme.ClairAccessible:
      case Theme.SombreAccessible:
        root.style.setProperty("--couleur-bien-place", "rgb(9, 104, 0)");
        root.style.setProperty("--couleur-mal-place", "rgb(49, 76, 116)");
        break;
      default:
        root.style.setProperty("--couleur-bien-place", "rgb(231, 0, 42)");
        root.style.setProperty("--couleur-mal-place", "rgb(49, 76, 116)");
    }
    switch (theme) {
      case Theme.ClairAccessible:
        root.style.setProperty("--couleur-lettre-survole-bien-place", "rgb(5, 61, 0)");
        root.style.setProperty("--couleur-lettre-survole-mal-place", "rgb(49, 76, 116)");
        break;
      case Theme.SombreAccessible:
        root.style.setProperty("--couleur-lettre-survole-bien-place", "rgba(9, 104, 0, 0.65)");
        root.style.setProperty("--couleur-lettre-survole-mal-place", "rgb(49, 76, 116)");
        break;
      case Theme.Clair:
        root.style.setProperty("--couleur-lettre-survole-bien-place", "rgb(153, 0, 28)");
        root.style.setProperty("--couleur-lettre-survole-mal-place", "rgb(49, 76, 116)");
      default:
        root.style.setProperty("--couleur-lettre-survole-bien-place", "rgba(231, 0, 42, 0.65)");
        root.style.setProperty("--couleur-lettre-survole-mal-place", "rgb(49, 76, 116)");
    }
  }
}
