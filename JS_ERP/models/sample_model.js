import Sequelize from "sequelize";
export default (sequelize) => {
  return sequelize.define(
    "tbl_buyer",
    {
      c_num: {
        type: Sequelize.DataTypes.STRING(5),
        allowNull: false,
        primaryKey: true,
      },
      c_name: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false,
      },
      c_tel: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      c_name2: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: true,
      },
      c_tel2: {
        type: Sequelize.DataTypes.STRING(15),
        allowNull: true,
      },
      c_addr: {
        type: Sequelize.DataTypes.STRING(125),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "tbl_buyer",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "c_num" }],
        },
      ],
    }
  );
};
