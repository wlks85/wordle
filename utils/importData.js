const mongoose = require('mongoose');
const dotenv = require('dotenv');
const readXlsxFile = require('read-excel-file/node');

dotenv.config();

const schema = new mongoose.Schema({}, {strict: false});
const WordModel = mongoose.model("words",schema);


mongoose.connect(process.env.MONGO_URL)
.then(()=> {
    readXlsxFile('data/Devine-voir_words.xlsx').then(async (rows) => {
        // `rows` is an array of rows
        // each row being an array of cells.
        const keys = ['release', 'word', 'title', 'description', 'image',];
        const [header, ...restRows] = rows;
        if(keys.length !== header.length) {
            throw new Error("Invalid data file. Please check columns");
        }
        const words = restRows.map((cols) => {
            return cols.reduce((acc, current, index)=> {
                acc[keys[index]] = current;
                return acc;
            },{})
        });
        let count = 0;
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            const found = await WordModel.countDocuments({word: word.word,});

            if(found === 0) {
                const w = new WordModel(word);
                await w.save();
                console.log(`Saved into db ${word.title}`);
                count++;
            }
        }
        console.log(`total ${count} word inserted`);
        process.exit(1);
      })
})




  

