import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('csus', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
 });
 
 export default sequelize ;




// import mysql from "mysql"

// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"csus"
// })