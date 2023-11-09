import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import libraryRouter from "./routes/library-router";

const server = express();
server.use(cors()).use(express.json()).use("/init", libraryRouter);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export default server;
