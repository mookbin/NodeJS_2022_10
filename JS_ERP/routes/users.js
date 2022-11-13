import express from "express";
import DB from "../models/index.js";
const Buyer = DB.models.tbl_buyer;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const buyers = await Buyer.findAll();
  
   res.render("list", { buyers });
});

router.get("/detail/:c_num", async (req, res, next) => {
    let buyers = await Buyer.findAll({ where: { c_num: req.params.c_num } });
  buyers = buyers[0].dataValues;
  
    res.render("detail", { buyers });
});

router.get("/add/:c_num?", async (req, res, next) => {
  try {
    let buyers = await Buyer.findAll({ where: { c_num: req.params.c_num } });
    buyers = buyers[0].dataValues;
    return res.render("add", { buyers });
  } catch (error) {
    let buyers = "";
    return res.render("add", { buyers });
  }
});

router.post("/add/:c_num?", async (req, res, next) => {
  const num = req.body.c_num;
  try {
    await Buyer.create(req.body);
  } catch (err) {
    await Buyer.update(req.body, { where: { c_num: req.body.c_num } });
  }
  res.redirect(`/users/detail/${num}`);
});

router.get("/delete/:c_num", async (req, res, next) => {
    await Buyer.destroy({ where: { c_num: req.params.c_num } });
    res.redirect(`/users`);
  
});

export default router;