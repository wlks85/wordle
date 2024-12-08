"use strict";
/**
 * Petit script qui nettoie le fichier des mots à trouver pour le mettre dans le format attendu par le système
 */
var fs = require("fs");
var instanceConfiguration = require("../public/js/instanceConfiguration");

let aujourdhui = new Date().getTime();
let origine = instanceConfiguration.default.dateOrigine.getTime();

let numeroGrille = Math.floor((aujourdhui - origine) / (24 * 3600 * 1000));

const maxFige = numeroGrille + 10; // inclus
fs.readFile("data/motsATrouve.txt", "UTF8", function (erreur, contenu) {
  // console.log(erreur);
  var dictionnaire = contenu.split("\n");
  let motsFiges = dictionnaire.slice(0, maxFige + 1);

  // delete old answers from db
  fetch(`http://127.0.0.1:4000/api/words/answer/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      // console.log("res", response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((updatedData) => {
      console.log("Data DELETED successfully:");
    })
    .catch((error) => {
      console.error("There was an error updating the data:", error);
    });
  // update answers
  // delete old answers from db
  dictionnaire
    .map((mot) =>
      mot
        .normalize("NFD")
        .replace(/\p{Diacritic}/gu, "")
        .toUpperCase()
        .trim()
        .replace(/^\s+|\s+$/g, "")
    )
    .forEach((mot, numeroMot) =>
      new Promise((resolve, reject) => {
        let datePartie = new Date(instanceConfiguration.default.dateOrigine);
        datePartie.setDate(datePartie.getDate() + numeroMot);

        let datePartieStr =
          datePartie.getFullYear().toString() +
          "-" +
          (datePartie.getMonth() + 1).toString().padStart(2, "0") +
          "-" +
          datePartie.getDate().toString().padStart(2, "0");

        return resolve(
          Buffer.from(
            instanceConfiguration.default.idPartieParDefaut +
              "-" +
              datePartieStr,
            "utf-8"
          ).toString("base64")
        );
      }).then((nomFichier) => {
        // update answers
        const data = {
          title: nomFichier,
          word: mot,
        };

        fetch(`http://127.0.0.1:4000/api/words`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            // console.log("res", response);
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((updatedData) => {
            console.log("Data updated successfully:", updatedData);
          })
          .catch((error) => {
            console.error("There was an error updating the data:", error);
          });
        // update answers

        fs.access(
          "public/mots/" + nomFichier + ".txt",
          fs.constants.F_OK,
          (err) => {
            if (err) {
              // Dans ce cas, le fichier n'existe pas
              fs.writeFile("public/mots/" + nomFichier + ".txt", mot, (err) => {
                if (err) console.error(err);
              });
            }
          }
        );
      })
    );
});
