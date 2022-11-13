import express from "express";
import DB from "../models/index.js";
const Buyer = DB.models.tbl_buyer;

const router = express.Router();

/* GET home page. */
router.get("/", async (req, res, next) => {
  const buyers = await Buyer.findAll();

  res.render("index", { buyers });
});

export default router;
