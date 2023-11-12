import httpStatus from "http-status";

function validate(schema) {
    return (req, res, next) => {
        const validationSchema = schema.validate(req.body, {
            abortEarly: false,
        });
        if (validationSchema.error) {
            const errors = validationSchema.error.details.map((d) => d.message);
            return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
        }
        next();
    };
}

export function validateBodyBook(body) {
    return validate(body);
}
