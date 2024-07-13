import express from 'express';
import mysql from 'mysql2';
import productRoute from './routers/index.js';
import { config } from 'dotenv';
import { connectToDatabase } from './DB/index.js';

config();
connectToDatabase().
    then(
      () => {
        console.log("Connected to DB");
      }
    ).catch(
      () => {
        console.log("Error connecting to DB");
        process.exit(0);
      }
    )

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/v1/products', productRoute);

app.get('/', (req, res, next) => {
  console.log(req.method);
  res.send("GET");
})

app.post('/', (req, res, next) => {
  console.log(req.method);
  res.send("POST");
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})