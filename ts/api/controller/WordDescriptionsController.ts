import { Router, Request, Response } from "express";
import AsyncExceptionWrapper from "../../lib/AsyncExceptionWrapper";
import { DictionaryService } from "../services/DictionaryService";
import { AnswersModel, IAnswer, Word } from "../entities";

const WordDescriptionController: Router = Router();

WordDescriptionController.get(
  "/prev/word",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    const word = await DictionaryService.getPrevWord();
    res.json({ data: word });
  })
);

WordDescriptionController.get(
  "/",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    const word = await DictionaryService.getWords();
    res.json({ data: word });
  })
);

WordDescriptionController.get(
  "/:word",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    const keyword = req.params.word;
    const word = await DictionaryService.getWordByName(keyword);
    res.json({ data: word });
  })
);

WordDescriptionController.post(
  "/",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    const payload: Word = req.body;
    const word = await DictionaryService.saveAWord(payload);
    res.json({ data: word });
  })
);

//answers
WordDescriptionController.put(
  "/",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    const payload: IAnswer = req.body;
    await DictionaryService.updateAnswer(payload);
    res.json({ data: "Collection updated successfully!" });
  })
);

WordDescriptionController.get(
  "/answer/:title",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    const keyword = req.params.title;
    const word = await DictionaryService.getWordByTitle(keyword);
    res.json({ data: word });
  })
);
WordDescriptionController.delete(
  "/answer/delete",
  AsyncExceptionWrapper(async (req: Request, res: Response) => {
    await DictionaryService.deleteAnswers();
    res.json({ data: "Deleted Successfully" });
  })
);

export default WordDescriptionController;
