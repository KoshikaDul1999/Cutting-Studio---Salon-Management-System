import express from "express";
import sequelize from "./connect.js";
import User from "./models/userModel.js";
import authRoutes from "./routes/auth.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use((req,res,next)=>{
   res.header("Access-Control-Allow-Credentials", true)
   next();
})
app.use(express.json())
app.use(
   cors({
       origin: "http://localhost:3000"
   })
)
app.use(cookieParser())

app.use("/api/auth", authRoutes)

const PORT = process.env.PORT || 8080;

sequelize
 .authenticate()
 .then(() => {
   console.log('Connection to the database has been established successfully.');
 })
 .catch((err) => {
   console.error('Unable to connect to the database:', err);
 });

 sequelize
 .sync({ force: true })
 .then(() => {
   console.log("Models synchronized successfully.");
   
   // Start the Express server after models synchronization
   app.listen(PORT, () => {
     console.log(`API Server is running on port ${PORT}`);
   });
 })
 .catch((err) => {
   console.error("Unable to synchronize models:", err);
 });
