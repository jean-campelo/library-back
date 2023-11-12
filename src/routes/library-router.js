import { Router } from "express";
import libraryController from "../controllers/library-controller.js";

const libraryRouter = Router();

libraryRouter.post("/new-register", libraryController.registerNewBook);

export default libraryRouter;
