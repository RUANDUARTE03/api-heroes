import express from "express";
import threatController from "../controllers/threatController";
const auth = require("../middlewares/auth");

const Router = express.Router();

Router.post("/create", auth, threatController.create);
Router.get("/getAll/", auth, threatController.getAll);
Router.post("/deleteAll", threatController.deleteAll);

export default Router;
