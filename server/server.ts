import express from "express";
import dotenv from 'dotenv';
import { connectDB } from './configs/db.ts';
dotenv.config();
const app = express();
connectDB();

app.get("/", function(req, res){
    return res.send("Hello World!");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on port "+ process.env.PORT);
});