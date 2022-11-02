import express from "express";
import path from "path";
import logger from "morgan";

import stRouter from "../routes/student.js";
import adRouter from "../routes/student_add.js";

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));

app.set("views", path.join("./views"));
app.set("view engine", "ejs");

app.use("/student", stRouter);
app.use("/student/add", adRouter);


export default app;
