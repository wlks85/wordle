export default class Dictionnaire {
  public constructor() {}

  // public static async getMot(
  //   idPartie: string,
  //   datePartie: Date
  // ): Promise<string> {
  //   return await this.getNomFichier(idPartie, datePartie)
  //     .then((nom) => {
  //       console.log("nom", nom);
  //       return fetch("mots/" + nom + ".txt");
  //     })
  //     .then(
  //       (resultat) =>
  //         new Promise<string>((resolve, reject) => {
  //           if (!resultat.ok) return reject("Mot non trouvé");
  //           return resolve(resultat.text());
  //         })
  //     )
  //     .then(async (motBrut) => {
  //       let mot = Dictionnaire.nettoyerMot(motBrut);
  //       console.log("mot", mot);
  //       let longueur = mot.length;
  //       console.log("mot.length", mot.length);
  //       let premiereLettre = mot[0];
  //       console.log("premiereLettre", premiereLettre);
  //       let _ = await import(
  //         `./mots/listeMotsProposables.${longueur}.${premiereLettre}`
  //       );
  //       return mot;
  //     });
  // }

  public static async getMot(
    idPartie: string,
    datePartie: Date
  ): Promise<string> {
    return await this.getNomFichier(idPartie, datePartie)
      .then((nom) => {
        console.log("nom", nom);
        return fetch(`https://mootus.dis-voir.ch/api/words/answer/${nom}`);
      })
      .then(async (resultat) => {
        if (!resultat.ok) {
          throw new Error("Mot non trouvé");
        }
        // Parse the response as JSON
        const response = await resultat.json();
        return response.data; // Access the 'data' field from the JSON response
      })
      .then(async (motBrut) => {
        let mot = Dictionnaire.nettoyerMot(motBrut);
        // console.log("mot", mot);
        let longueur = mot.length;
        // console.log("mot length", mot.length);
        let premiereLettre = mot[0];
        // console.log("premiereLettre", premiereLettre);
        let _ = await import(
          `./mots/listeMotsProposables.${longueur}.${premiereLettre}`
        );
        return mot;
      });
  }

  private static async getNomFichier(
    idPartie: string,
    datePartie: Date
  ): Promise<string> {
    let datePartieStr =
      datePartie.getFullYear().toString() +
      "-" +
      (datePartie.getMonth() + 1).toString().padStart(2, "0") +
      "-" +
      datePartie.getDate().toString().padStart(2, "0");

    return btoa(idPartie + "-" + datePartieStr);
  }

  public static async estMotValide(
    mot: string,
    premiereLettre: string,
    longueur: number
  ): Promise<boolean> {
    mot = this.nettoyerMot(mot);
    let ListeMotsProposables = await import("./mots/listeMotsProposables");
    return (
      mot.length >= 6 &&
      mot.length <= 10 &&
      ListeMotsProposables.default.Dictionnaire.includes(mot)
    );
  }

  public static nettoyerMot(mot: string): string {
    return mot
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  }
}
