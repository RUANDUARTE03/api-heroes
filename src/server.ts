require("dotenv").config()
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongooseConnect from "./database";
import Router from "./routes";

const App = express();

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(cors());
App.use(Router);

mongooseConnect();

const PORT = process.env.PORT || 4000;

App.listen(PORT, () => {
  console.log(`HTTP Server running! at ${PORT}`);
});
