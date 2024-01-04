import { DataTypes } from 'sequelize';
import sequelize from '../connect.js';


const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  product_name: {
    type: DataTypes.STRING(100),
  },
  description: {
    type: DataTypes.STRING(255),
  },
  price: {
    type: DataTypes.DOUBLE(10,2),
  },
  quantity_available: {
    type: DataTypes.INTEGER,
  },
  brand: {
    type: DataTypes.STRING(255),
  },
  category: {
    type: DataTypes.STRING(255),
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export default Product;
