import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "mysql",
  user: process.env.MYSQL_USER || "weatheruser",
  password: process.env.MYSQL_PASSWORD || "weatherpass",
  database: process.env.MYSQL_DATABASE || "weatherapp"
});
