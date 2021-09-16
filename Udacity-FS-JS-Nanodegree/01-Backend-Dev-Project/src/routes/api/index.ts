import express from "express";
import { checking } from "../../utilities/checking";

const routes = express.Router();

//call checking middleware
routes.get("/", checking, (req, res) => {
  res.send("Options: filename, width, height, format");
});

export default routes;
