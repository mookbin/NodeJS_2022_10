import _tbl_sample from "./sample_model.js";
import _tbl_buyer from "./tbl_buyer.js";
import _tbl_product from "./tbl_product.js";

const initModels = (sequelize) => {
  const tbl_sample = _tbl_sample(sequelize);
  const tbl_buyer = _tbl_buyer(sequelize);
  const tbl_product = tbl_product(sequelize);

  return {
    tbl_sample,
    tbl_buyer,
    tbl_product,
  };
};

export default initModels;
