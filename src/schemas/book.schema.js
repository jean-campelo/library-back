import joi from "joi";

const validGenres = [
    "FANTASY",
    "THRILLER",
    "SCIENCE_FICTION",
    "MYSTERY",
    "ROMANCE",
    "HORROR",
    "HISTORIAL",
    "NON_FICTION",
    "ADVENTURE",
    "DRAMA",
    "COMEDY",
    "BIOGRAPHY",
];

export const registerBookSchema = joi.object({
    title: joi.string().required(),
    img: joi.string(),
    publishYear: joi.number().required().min(4),
    pages: joi.number().required(),
    description: joi.string().required().max(400),
    genre: joi
        .string()
        .valid(...validGenres)
        .required(),
});
