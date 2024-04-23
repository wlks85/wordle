import {WordModel, Word} from "../entities";

const validateWord = (word: Word): boolean => {
    const regex = /\s/;
    if(!word) return false;
    return !regex.test(word.title);
}

export class DictionaryService {
    public static async getWordByName(keyword: string): Promise<Word> {
        if(/\s/.test(keyword)) throw new Error("400- Bad request");
        const word: Word |null = await WordModel.findOne({word: new RegExp(keyword, "i")});
        if(!word) throw new Error(`404- requested resource ${keyword} is not found`);
        return word;
    }

    public static async saveAWord(word: Word): Promise<Word> {
        if(!validateWord(word)) throw new Error("400- Bad request");
        word.title = word.title.toUpperCase();
       const dbWord = new WordModel({
        ...word,
       });
       await  dbWord.save();
       return dbWord;
    }
}
