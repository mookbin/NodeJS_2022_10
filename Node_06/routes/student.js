import express from "express";
import mysql from "../modules/mysqlDB.js";
const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM tbl_student";

  mysql.query(sql, (error, students, fields) => {
    res.render("student", { students });
  });
});

router.get("/list", (req, res) => {
  res.render("student", { students: [] });
});

router.post("/list", (req, res) => {
  const name = req.body.s_name;
  console.log(name);
  const sql = "SELECT * FROM tbl_student WHERE st_name LIKE CONCAT('%',?,'%')";
  mysql.execute(sql, [name], (err, students, fields) => {
    res.render("student", { students });
  });
});

export default router;
