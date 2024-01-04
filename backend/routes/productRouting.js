import express from 'express';
import {
  getProducts,
  getProductsByCategory,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/ProductController.js';

const router = express.Router();

router.get('/getProduct', getProducts);
router.post('/create', createProduct); // Changed endpoint to '/products/create'
router.get('/getProductById/:id', getProductById);
router.put('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.get('/products/category/:category', getProductsByCategory);

export default router;



