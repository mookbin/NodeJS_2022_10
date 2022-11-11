import express from "express";
import DB from "../models/index.js";
const Buyer = DB.models.tbl_buyer;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const buyers = await Buyer.findAll();

  res.render("index", { buyers });
});

router.get("/buyer", async (req, res, next) => {
  const buyers = await Buyer.findAll();

  res.render("insert", { buyers });
});

router.get("/add", async (req, res, next) => {
  const buyers = await Buyer.findAll();

  res.render("add", { buyers });
});

// router.get("/get/:t_seq", async (req, res, next) => {
//   const buyers = await Buyer.findAll({ where: { t_seq: req.params.t_seq } });
//   res.render("index", { buyers });
// });

router.post("/detail", async (req, res) => {
  try {
    await Buyer.create(req.body);
  } catch (err) {
    await Buyer.update(req.body, { where: { t_seq: req.body.t_seq } });
  }
  res.redirect("/detail");
});

export default router;
