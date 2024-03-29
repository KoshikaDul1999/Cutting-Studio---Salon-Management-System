import express from 'express';
import {
  getSales,
  getSalesByDateRange,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
} from '../controllers/SalesController.js';

const router = express.Router();

router.get('/getSales', getSales);
router.get('/getSalesByDateRange', getSalesByDateRange);
router.post('/createSale', createSale);
router.get('/getSaleById/:id', getSaleById);
router.put('/updateSale/:id', updateSale);
router.delete('/deleteSale/:id', deleteSale);

export default router;
