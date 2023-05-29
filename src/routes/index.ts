import express from "express";

const Router = express.Router();

import client from "./client";
import auth from "./auth";
import heroe from "./heroe";
import threat from './threat'

Router.use("/api/client", client);
Router.use("/api/auth", auth);
Router.use("/api/heroe", heroe);
Router.use("/api/threat", threat);

export default Router;
