import express from "express";

const Router = express.Router();

import client from "./client";
import auth from "./auth";
import heroe from "./heroe";
import threat from './threat'
import fake from './fake'

Router.use("/api/client", client);
Router.use("/api/auth", auth);
Router.use("/api/heroe", heroe);
Router.use("/api/threat", threat);
Router.use("/api/fake", fake);

export default Router;
