import express from "express";
import clientController from "../controllers/clientController";

const Router = express.Router();

Router.post("/create", clientController.create);

export default Router;
