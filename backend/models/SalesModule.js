import { DataTypes } from 'sequelize';
import sequelize from '../connect.js';

const Sale = sequelize.define('sales', {
  SaleID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: DataTypes.STRING(255),
  },
  date: {
    type: DataTypes.STRING(255),
  },
  amount: {
    type: DataTypes.DOUBLE(10, 2),
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
});

export default Sale;
