/**
 * express import 하고
 * express.Router()함수를 사용하여 router 객체 선언
 * router 객체를 export 하여 모듈 선언 완성
 *
 * http://localhost:3000/city 로 요청할 경우
 * "안녕하세요 도시 정보 입니다~~"라고 화면에 나타나도록
 * app.js에 설정
 */

import express from "express";
import mysql from "../modules/mysqlDB.js";

const router = express.Router();

//http://localhost:3000/city/ 의 요청처리
router.get("/", (req, res) => {
  //res.send("안녕하세요 도시 정보입니다~~");
  const citySelect = "SELECT * FROM city Limit 0, 10";

  /**
   * mysql 객체(퀵배달)을 통하여 MYSQL Server 에게
   * SQL (SELECT)를 보내고, 결과가 되돌아 오는 동안
   * 다른 일(코드, 기능)을 수행하라
   * 만약 MySQL Server 에서 데이터가 완료되어 되돌아오거든
   * (error, result, fields)=> {} 이 함수를 실행하라
   * 이 함수를 비동기(Async) Callback 함수 라고 한다
   */
  mysql.query(citySelect, (error, result, fields) => {
    res.json(result);
  });
});

/**
 * localhost:/3000/city/pop/10000/50000 이라고 요청을 하면
 * 인구 1만이상 5만 이하의 도시를 웹으로 response 하시오
 */
router.get("/pop/:num1/:num2", (req, res) => {
  const ct_num1 = req.params.num1;
  const ct_num2 = req.params.num2;

  const citySelectPop = "SELECT * FROM city WHERE population BETWEEN ? AND ?  ";
  mysql.execute(citySelectPop, [ct_num1, ct_num2], (error, result, fields) => {
    res.json(result);
  });
});
// RequestParam 방식으로 데이터 전달하기
// 마치 주소가 이미 만들어 진 것 처럼 보내서
// 변수를 노출하지 않는다
// 변수를 두개 다 보내지 않으면 결과가 나오지 않음
// 최근에 많이 사용되는 방법
// lt_ <=
// gt-  >=
router.get("/pop/:lt_pop/:gt_pop", (req, res) => {
  const sql = "SELECT * FROM city WHERE population BETWEEN ? AND ?  ";
  mysql.execute(
    sql,
    [req.params.lt_pop, req.params.gt_pop],
    (error, result, fields) => {
      res.json(result);
    }
  );
});

//http://localhost:3000/city/pop?gt_pop=10000&lt_pop=50000
//http://localhost:3000/city/pop?lt_pop=10000&gt_pop=50000
// 둘 다 결과가 같음

//querystring : 주소표시줄에 ?변수명=값 형식으로 데이터 전달하기
// 주소 표시줄에 변수명이 노출되므로 보안에 취약하다
router.get("/pop", (req, res) => {
  const lt_pop = req.query.lt_pop;
  const gt_pop = req.query.gt_pop;

  const sql = "SELECT * FROM city WHERE population BETWEEN ? AND ?  ";
  mysql.execute(sql, [lt_pop, gt_pop], (error, result, fields) => {
    res.json(result);
  });
});

//http://localhost:3000/city/country 의 요청처리
router.get("/country", (req, res) => {
  // res.send("나는 국가 정보입니다");
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

router.get("/country/:lt_gnp/:gt_gnp", (req, res) => {
  const sql =
    "SELECT name, gnp FROM country WHERE gnp BETWEEN ? AND ? GROUP BY name ";
  mysql.execute(
    sql,
    [req.params.lt_gnp, req.params.gt_gnp],
    (error, result, fields) => {
      res.json(result);
    }
  );
});

// localhost:3000/city/도시이름 이라고 요청을 하면

router.get("/:name", (req, res) => {
  const ct_name = req.params.name;
  const citySelectWhere = "SELECT * FROM city WHERE name =?";
  mysql.execute(citySelectWhere, [ct_name], (err, result, f) => {
    res.json(result);
  });
});

export default router;
