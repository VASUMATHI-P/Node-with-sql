import { create, deleteRecord, find, findById, update } from "../DB/queries.js"

export const getAllProducts = async (req, res) => {
  try {
    const products = await find();
    return res.status(200).json(products);
  }catch(err) {
    console.log(err)
  }
}

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await findById(id);
    res.status(200).json({product});
  } catch(err){
    console.log(err)
  }
}

export const createProduct = async (req, res) => {
  const {title, description, price} = req.body;

  if(!title || !description || !price){
    return res.status(400).json({message: "Please fill all the fields."})
  }

  try{
   const product = await create(title, description, price);
   return res.status(201).json(product);
  } catch(err){
    console.log(err);
  }
}

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const {title, description, price} = req.body;

  try {
    const updatedProduct = await update(title, description, price, id);
    return res.status(200).json(updatedProduct);
  } catch(err){
    console.log(err)
  }
}

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const deletedProduct = await deleteRecord(req.params.id);
    return res.status(200).json(deletedProduct);
  } catch (err){
    return res.sendStatus(400);
  }
}