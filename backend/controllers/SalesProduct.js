import Sale from '../models/SaleModel.js';
import express from 'express';

const router = express.Router();

// Get all sales
export const getSales = async (req, res) => {
  try {
    const sales = await Sale.findAll();
    res.status(200).json(sales);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific sale by ID
export const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    res.status(200).json(sale);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Create a new sale
export const createSale = async (req, res) => {
  try {
    const newSale = await Sale.create(req.body);
    res.status(201).json({ msg: 'Sale Created', sale: newSale });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a sale by ID
export const updateSale = async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    await sale.update(req.body);
    res.status(200).json({ msg: 'Sale Updated', sale });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a sale by ID
export const deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findByPk(req.params.id);
    if (!sale) {
      return res.status(404).json({ error: 'Sale not found' });
    }
    await sale.destroy();
    res.status(200).json({ msg: 'Sale Deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default router;
