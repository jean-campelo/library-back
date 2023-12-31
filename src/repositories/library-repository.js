import prisma from "../config/database.js";

async function findUniqueBook(title) {
    return prisma.book.findFirst({
        where: { title },
    });
}

async function create({ title, img, publishYear, pages, description, genre, authorId }) {
    return prisma.book.create({
        data: { title, img, publishYear, pages, description, genre, authorId },
    });
}

const libraryRepository = {
    findUniqueBook,
    create,
};

export default libraryRepository;
