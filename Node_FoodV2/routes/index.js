import {
  TD_SELECT_ALL,
  TD_FIND_BY_ID,
  TD_INSERT,
  TD_UPDATE,
  TD_DELETE,
  TD_DATE_LIST,
  TD_CAL_SUM_LIST,
  TD_CAL_LIST,
  TD_INSERT_OR_UPDATE,
} from "../modules/food_CRUD.js";
import mysqlConn from "../modules/mysqlDB.js";

import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  mysqlConn.execute(TD_SELECT_ALL, (err, todays, field) => {
    res.render("index", { todays });
  });
});

/**
 * 배열의 전개연산자
 * arr1 = [1,2,3,4,5]
 * arr2 = [9,8,7,6]
 * arr3 = [...arr1, ...arr2]
 * ? arr3 = [1,2,3,4,5,9,8,7,6]
 */
router.post("/", (req, res) => {
  const params = [...Object.values(req.body), ...Object.values(req.body)];
  console.log(params);

  /**
   * MYSQL 의 INSERT ON DUPLICATE KEY SQL 을 사용하여
   * INSERT OR UPDATE 를 실행하려고 하면
   * parameter 로 사용되는 배열을 두 번 나열해주어야 한다.
   * [t_seq, t_date,.l.., t_seq, t_date]
   * MYSQL2 버그로 생각됨
   */
  mysqlConn.execute(TD_INSERT_OR_UPDATE, params, (e, result, f) => {
    console.log(e);
    res.redirect("/");
  });
});

export default router;
