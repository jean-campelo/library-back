import { Router } from "express";
import libraryController from "../controllers/library-controller";

const libraryRouter = Router();

libraryRouter.get("/library", libraryController.initial);

export default libraryRouter;
