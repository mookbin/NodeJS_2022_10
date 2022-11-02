import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();


router.get("/", (req, res) => {
  res.send("add Router");
});


export default router;





