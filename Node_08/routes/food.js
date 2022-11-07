import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sql = `SELECT * 
        FROM tbl_today 
        ORDER BY fd_date
        LIMIT 0, 20`;
  mysql.execute(sql, (err, foods, field) => {
    res.render("index", { foods });
  });
});

router.get("/", (req, res) => {
  let fd_name = req.query.fd_name;
  let sql = "SELECT * FROM tbl_today ORDER BY fd_num";
  if (fd_name) {
    sql = ` SELECT * FROM tbl_today
        WHERE fd_name LIKE CONCAT('%', ?, '%') 
        ORDER BY fd_num `;
  } else {
    fd_name = "";
  }
  mysql.execute(sql, [fd_name], (err, foods, field) => {
    res.render("food/fd_main", { body: "list", foods });
  });
});

router.get("/insert", (req, res) => {
  res.render("food/fd_main", { body: "write", food: {} });
});

router.post("/insert", (req, res) => {
  const food = req.body;
  console.log(food);
  const sql = `INSERT INTO tbl_today(
            fd_date,fd_name, fd_num, fd_cal
            ) VALUES (
              ?,?,?,?
            )`;
  mysql.execute(sql, Object.values(food), (err, result, field) => {
    if (err) {
      console.error(err);
    }

    res.redirect(`/food?fd_name=${food.fd_name}`);
  });
});

const today = new Date();
const year = today.getFullYear();
const month = today.getMonth();
const date = today.getDate();

const todayContent = `${year}년 ${month}월 ${date}일 `;

export default router;
