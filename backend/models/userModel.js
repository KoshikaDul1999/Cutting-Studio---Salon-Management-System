import { DataTypes } from 'sequelize';
import sequelize from '../connect.js';


const User = sequelize.define('users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(255),
  },
  password: {
    type: DataTypes.STRING(255),
  },
  name: {
    type: DataTypes.STRING(100),
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

export default User;
