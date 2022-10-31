import express from "express";
import mysql from "../modules/mysqlDB.js";
const router = express.Router();


router.get("/", (req, res) => {
  const countrySelect = "SELECT * FROM country Limit 0, 10";
  mysql.query(countrySelect, (err, data, fields) => {
    res.json(data);
  });
});
/**
 * http://localhost:3000/country/100/500
 * 각 국가의 GNP 가 100 이상 500 이하인 국가 리스트 SELECT
 *
 * http://localhost:3000/country/100
 * 각 국가의 GNP 가 0 이상 100 이하인 국가 리스트 SELECT
 *
 * 이 두개의 요청을 한개의 router.get()에서 처리
 */

router.get("/:num1/:num2", (req, res) => {
  const sql =
    "SELECT name, gnp FROM country WHERE gnp BETWEEN ? AND ?  GROUP BY name ORDER BY gnp DESC ";
  mysql.execute(
    sql,
    [req.params.num1, req.params.num2],
    (error, result, fields) => {
      res.json(result);
    }
  );
});

router.get("/:num3", (req, res) => {
const num3 = req.params.num3

  const sql ="SELECT name, gnp FROM country WHERE gnp <= ?  GROUP BY name ORDER BY gnp DESC ";
  mysql.execute(sql, [num3], (error, result, fields) => {
    res.json(result);
  });
});

router.route("/")
.get

export default router;