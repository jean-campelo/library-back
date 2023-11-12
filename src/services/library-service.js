import libraryRepository from "../repositories/library-repository.js";
import { bookAlreadyRegistered } from "./errors.js";

async function registerBook({ title, img, publishYear, pages, description, genre }) {
    await validateBookRegister(title);

    const newBook = await libraryRepository.create({
        title,
        img,
        publishYear,
        pages,
        description,
        genre,
    });

    return newBook;
}

async function validateBookRegister(title) {
    const bookRegistered = await libraryRepository.findUniqueBook(title);
    if (bookRegistered) throw bookAlreadyRegistered();
}

const libraryService = {
    registerBook,
};

export default libraryService;
