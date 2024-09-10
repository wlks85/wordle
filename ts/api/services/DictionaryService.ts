import InstanceConfiguration from "../../instanceConfiguration";
import { WordModel, Word, IAnswer, AnswersModel } from "../entities";

const validateWord = (word: Word): boolean => {
  const regex = /\s/;
  if (!word) return false;
  return !regex.test(word.title);
};

export class DictionaryService {
  public static async getWordByName(keyword: string): Promise<Word> {
    if (/\s/.test(keyword)) throw new Error("400- Bad request");
    const word: Word | null = await WordModel.findOne({
      word: new RegExp(keyword, "i"),
    });
    if (!word)
      throw new Error(`404- requested resource ${keyword} is not found`);
    return word;
  }
  // Method to calculate the current "day_X" based on the difference from dateOrigine
  private static getDayX(): string {
    const today = new Date();
    const timeDiff =
      today.getTime() - InstanceConfiguration.dateOrigine.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24)); // Calculate days difference
    return `day_${daysDiff}`;
  }

  public static async getPrevWord(): Promise<any> {
    let prev_day = this.getDayX();
    let wordData = await WordModel.findOne({ release: prev_day }).exec();

    return wordData;
  }

  public static async getWords(): Promise<any> {
    let wordData = await WordModel.find({}).select("word");
    let da = wordData.map((item) => item.word);
    return da;
  }

  public static async saveAWord(word: Word): Promise<Word> {
    if (!validateWord(word)) throw new Error("400- Bad request");
    word.title = word.title.toUpperCase();
    const dbWord = new WordModel({
      ...word,
    });
    await dbWord.save();
    return dbWord;
  }
  // answers
  public static async updateAnswer({ word, title }: IAnswer): Promise<void> {
    try {
      const newAnswer = new AnswersModel({ title, word });
      await newAnswer.save();
    } catch (err) {
      console.error("Error in upsertAnswer:", err);
    }
  }

  public static async getWordByTitle(title: string): Promise<string | null> {
    let wordData = await AnswersModel.findOne({ title }).select("word").lean();
    return wordData ? wordData.word : null;
  }
  public static async deleteAnswers(): Promise<void> {
    await AnswersModel.deleteMany({});
  }
}
