import { Router } from "express";
import {WordDescController} from "../controller";

const routes: Router = Router();

routes.use("/words", WordDescController);

export default routes;
