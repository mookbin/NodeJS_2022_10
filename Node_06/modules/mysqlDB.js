import mysql from "mysql2";

const mysqlConnConfig = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "!Biz8080",
  database: "schoolDB",
};
const dbConnection = mysql.createConnection(mysqlConnConfig);

dbConnection.connect(() => {
  console.log("MySQL Connect OK~");
});
export default dbConnection;
