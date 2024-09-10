const mongoose = require("mongoose");
const dotenv = require("dotenv");
const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

dotenv.config();

const schema = new mongoose.Schema({}, { strict: false });
const WordModel = mongoose.model("words", schema);

mongoose.connect(process.env.MONGO_URL).then(() => {
  readXlsxFile("data/Devine-voir_words.xlsx").then(async (rows) => {
    // `rows` is an array of rows
    // each row being an array of cells.
    const keys = ["release", "word", "title", "description", "image"];
    const [header, ...restRows] = rows;
    if (keys.length !== header.length) {
      throw new Error("Invalid data file. Please check columns");
    }
    const words = restRows.map((cols) => {
      return cols.reduce((acc, current, index) => {
        acc[keys[index]] = current;
        return acc;
      }, {});
    });

    let count = 0;
    for (let index = 0; index < words.length; index++) {
      const word = words[index];
      const found = await WordModel.countDocuments({ word: word.word });
      await updateWords(word.word);

      if (found === 0) {
        const w = new WordModel(word);
        await w.save();
        console.log(`Saved into db ${word.title}`);
        count++;
      }
    }
    console.log(`total ${count} word inserted`);
    process.exit(1);
  });
});

async function updateWords(word) {
  const fs = require("fs").promises; // Use promise-based fs methods

  try {
    let data = await fs.readFile("data/motsATrouve.txt", "utf8");

    // Split and filter existing words
    let words = data ? data.split(/\s+/).filter(Boolean) : [];

    if (words.includes(word)) {
      //   words = words.filter((w) => w !== word);
      //   console.log(`${word} found and removed.`);
    } else {
      words.push(word);
      console.log(`${word} added.`);
    }

    // Write the updated words back to the file
    await fs.writeFile("data/motsATrouve.txt", words.join("\n"), "utf8");
    console.log("File updated.");
  } catch (error) {
    console.error("Error updating words file:", error);
  }
}
