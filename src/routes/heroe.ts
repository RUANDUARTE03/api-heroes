import express from "express";
import heroeController from "../controllers/heroeController";
const auth = require("../middlewares/auth");

const Router = express.Router();

Router.post("/create", auth, heroeController.create);
Router.post("/removeToBatle/:id", auth, heroeController.removeToBatle);
Router.post("/removeAllToBalte", heroeController.updateAllToNotBatle);
Router.post("/update/:id", auth, heroeController.updateHeroe);
Router.get("/getById/:id", auth, heroeController.getHeroeById);
Router.get("/list/:userId", auth, heroeController.getAllByUser);
Router.delete("/remove/:id", heroeController.removeHeroe);

export default Router;
