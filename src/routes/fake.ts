import express from "express";
import fakeController from "../controllers/fakeController";

const Router = express.Router();

Router.post("/generateFake", fakeController.generateFake);

export default Router;
