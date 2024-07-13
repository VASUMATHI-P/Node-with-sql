import { pool } from "./index.js";

export const find = async () => {
  const query = "SELECT * FROM PRODUCTS";
  try {
    const client = await pool.getConnection();
    const result = await client.query(query);
    console.log(result[0]);
    return result;
  } catch(err){
    console.log("Error occurred while finding all records" + err);
    throw err;
  }
}

export const findById = async (id) => {
  const query = "SELECT * FROM PRODUCTS WHERE id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(query, [id]);
    console.log(result[0]);
    return result[0];
  } catch(err){
    console.log("Error occurred while finding record by id" + err);
    throw err;
  } 
}

export const create = async (title, description, price) => {
  const query = "INSERT INTO PRODUCTS (title, description, price) VALUES (?, ?, ?)";
  try{
    const client = await pool.getConnection();
    const result = await client.query(query, [title, description, price]);
    return result;
  } catch (err){
    console.log("Error occurred while creating a record" + err);
  }
}

export const update = async (title, description, price, id) => {
  const query = "UPDATE PRODUCTS SET title = ?, description = ?, price = ? WHERE id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(query, [title, description, price, id]);
    return result;
  } catch (err){
    console.log("Error occurred while updating a record" + err);
  }
}

export const deleteRecord = async (id) => {
  const query = "DELETE FROM products WHERE id = ?";
  try {
    const client = await pool.getConnection();
    const result = await client.query(query, [id]);
    return result;
  } catch(err){
    console.log("Error occurred while deleting a record" + err);
  }
}