import express from "express";
import http from "http";
import fs from "fs";
import InstanceConfiguration from "./instanceConfiguration";
import { InitDb } from "./lib";
import dotenv from "dotenv";
import RegisterApi from "./api";
import bodyParser from "body-parser";
import { Console } from "console";
import cors from "cors";
dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());
const port = parseInt(String(process.env.SUTOM_PORT), 10) || 4000;

(async () => {
  app.use("/", express.static("public/"));
  app.use("/js", express.static("public/js/"));
  app.use("/ts", express.static("ts/"));
  app.use("/mots", express.static("public/mots/"));
  app.use(
    "/node_modules/requirejs/require.js",
    express.static("node_modules/requirejs/require.js")
  );
  RegisterApi(app);
  // Vu que le serveur node est prévu pour du test, on va créer un mot du jour s'il n'existe pas
  let datePartie = new Date();
  let datePartieStr =
    datePartie.getFullYear().toString() +
    "-" +
    (datePartie.getMonth() + 1).toString().padStart(2, "0") +
    "-" +
    datePartie.getDate().toString().padStart(2, "0");

  let nomFichier = Buffer.from(
    InstanceConfiguration.idPartieParDefaut + "-" + datePartieStr,
    "utf-8"
  ).toString("base64");

  // const adresseFichierMot = "public/mots/" + nomFichier + ".txt";
  // fs.access(adresseFichierMot, fs.constants.F_OK, (err) => {
  //   if (err) {
  //     fs.writeFile(adresseFichierMot, "DIFFUSION", (err) => {
  //       if (err) console.error(err);
  //     });
  //   }
  // });

  app.use(express.json());
  const server = http.createServer(app);

  InitDb()
    .then(() => {
      server.listen(port, () => {
        console.log(`Jeu démarré : https://mootus.dis-voir.ch`);
      });
    })
    .catch((err) => {
      console.error(err.message);
    });
})();
