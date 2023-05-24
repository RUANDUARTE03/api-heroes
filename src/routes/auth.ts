import express from "express";
import authController from "../controllers/authController";

const Router = express.Router();

Router.post("/login", authController.login);

export default Router;
