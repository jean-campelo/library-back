import joi from "joi";

export const registerBookSchema = joi.object({
    title: joi.string().required(),
    img: joi.string(),
    publishYear: joi.number().required().min(4),
    pages: joi.number().required(),
    description: joi.string().required().max(400),
    genre: joi.string().required(),
    authorId: joi.number().required(),
});
