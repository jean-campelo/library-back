import httpStatus from "http-status";
import libraryService from "../services/library-service.js";

async function registerNewBook(req, res) {
    const { title, img, publishYear, pages, description, genre, authorId } = req.body;

    try {
        const bookData = await libraryService.registerBook({
            title,
            img,
            publishYear,
            pages,
            description,
            genre,
            authorId,
        });

        return res.status(httpStatus.CREATED).send(bookData);
    } catch (error) {
        if (error.name === "BookDuplicatedError") {
            return res.status(httpStatus.CONFLICT).send(error.message);
        }
        console.log(error);
        return res.status(httpStatus.BAD_REQUEST).send(error);
    }
}

const libraryController = {
    registerNewBook,
};

export default libraryController;
