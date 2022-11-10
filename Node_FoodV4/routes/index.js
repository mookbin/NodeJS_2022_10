import express from "express";
import DB from "../models/index.js";

const router = express.Router();
const Today = DB.models.tbl_today;
/* GET home page. */
router.get("/", async (req, res, next) => {
  const todays = await Today.findAll();
  return res.render("index", { todays });
});

router.post("/", async (req, res) => {
  res.redirect("/");
});
export default router;
