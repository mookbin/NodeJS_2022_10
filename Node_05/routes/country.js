import express from "express";
import mysql from "../modules/mysqlDB.js";
const router = express.Router();

router.get("/", (req, res) => {
  const cntSelect = "SELECT * FROM country ORDER BY name";

  mysql.query(cntSelect, (error, result, fields) => {
    /**
     * 국가 ={code, name,...}
     * result = [ {국가},{국가},{국가}]
     */
    //res.send(result);
    res.render("country", { countrys: result });
  });
});

// 주소창에 (메뉴클릭) http://localhost:3000/country/list 입력하고
// Enter 를 눌렀을 때 처리하는 URI
// 메뉴에서 link를  클릭했을 때 처리하는 URI
router.get("/list", (req, res) => {
  res.render("country", { countrys: [] });
});
//method(get, post) : 주소가 같아도 처리하는 게 다르면

router.post("/list", (req, res) => {
  // form 의 input 에 설정된  name(c_name) 변수를 setter 하여
  // name 변수에 저장
  const name = req.body.c_name;
  console.log(name);
  const sql =
    // 따옴표 안에 앞 뒤 빈칸 넣기 필수
    " SELECT * FROM country " + " WHERE name LIKE " + " CONCAT('%', ? , '%') ";
  mysql.execute(sql, [name], (err, countrys, fields) => {
    res.render("country", { countrys });
  });
});

router.get("/:name/get", (req, res) => {
  const name = req.params.name;
  const sql = "SELECT * FROM country Where name = ? ORDER BY code";

  mysql.query(sql, [name], (error, countrys, fields) => {
    //res.send(result);
    res.render("country", { countrys });
  });
});

router.get("/:name2/like", (req, res) => {
  const name2 = req.params.name2;
  const cntName =
    "SELECT * FROM country WHERE name LIKE CONCAT('%', ?, '%') ORDER BY code";

  mysql.query(cntName, [name2], (error, countrys, fields) => {
    //res.json(result);
    res.render("country", { countrys });
  });
});

export default router;
