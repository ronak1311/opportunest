import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";

dotenv.config({});

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})