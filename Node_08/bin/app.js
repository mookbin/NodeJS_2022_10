import express from "express";
import path from "path";
import logger from "morgan";

import foodRouter from "../routes/food.js";

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join("views"));
app.set("view engine", "ejs");

app.use(express.static(path.join("public")));

app.use("/", (req, res, next) => {
  console.log("express Start!!");
  next();
});

app.use("/food", foodRouter);

export default app;
