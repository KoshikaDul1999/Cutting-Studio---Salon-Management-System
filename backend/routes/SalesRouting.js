import express from 'express';
import {
  getSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
} from '../controllers/SaleController.js';

const router = express.Router();

router.get('/getSales', getSales);
router.post('/createSale', createSale);
router.get('/getSaleById/:id', getSaleById);
router.put('/updateSale/:id', updateSale);
router.delete('/deleteSale/:id', deleteSale);

export default router;
