import express from 'express';
import { createProduct, deleteProduct, getAllProducts, getProduct, updateProduct } from '../handlers/index.js';

const router = express.Router();

router.get('/', getAllProducts)
router.get('/:id', getProduct)
router.post('/create', createProduct)
router.put('/update/:id', updateProduct)
router.delete('/delete/:id', deleteProduct);

export default router;