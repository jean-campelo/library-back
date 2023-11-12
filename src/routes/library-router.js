import { Router } from "express";
import libraryController from "../controllers/library-controller.js";
import { validateBodyBook } from "../middlewares/book-middleware.js";
import { registerBookSchema } from "../schemas/book.schema.js";

const libraryRouter = Router();

libraryRouter.post("/new-register", validateBodyBook(registerBookSchema), libraryController.registerNewBook);

export default libraryRouter;
