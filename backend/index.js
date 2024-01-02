import express from "express";
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", true)
    next()
})
app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)
app.use(cookieParser())

app.use("/api/auth", authRoutes)

app.listen(8080, ()=>{
    console.log("API Working!")
})