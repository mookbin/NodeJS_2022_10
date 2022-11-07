import mysql from "mysql2";

const config = {
  host: "localhost",
  user: "root",
  password: "Kang1414!!",
  database: "foodDB",
};

const dbConnection = mysql.createConnection(config);

export default dbConnection;