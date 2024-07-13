import {createPool} from "mysql2/promise";

export const pool = createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Vasu@281",
  database: "ecom"
});


export const connectToDatabase = async () => {
  try {
    await pool.getConnection();
    console.log(("MySql connection successful "));
  } catch (err){
    console.log(err);
    console.log('DB connection error');
    throw err;
  }
}

