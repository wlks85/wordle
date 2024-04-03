import { Router, Request, Response } from "express";
import AsyncExceptionWrapper from "../../lib/AsyncExceptionWrapper";
import {DictionaryService } from "../services/DictionaryService";
import { Word } from "../entities";

const WordDescriptionController: Router = Router();

WordDescriptionController.get("/:word", AsyncExceptionWrapper(async (req: Request, res: Response,) => {
    const keyword = req.params.word;
    const word = await DictionaryService.getWordByName(keyword);
    res.json({data: word});
}));

WordDescriptionController.post("/", AsyncExceptionWrapper(async (req: Request, res: Response,) => {
    const payload: Word = req.body;
    const word = await DictionaryService.saveAWord(payload);
    res.json({data: word});
}));

export default WordDescriptionController;
