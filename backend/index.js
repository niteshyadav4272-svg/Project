import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from 'path'

import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();



app.use(
    cors({
        origin: process.env.FRONTEND,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
const __dirname = path.resolve()




app.use("/api/messages", messageRoutes);


app.use(express.static(path.join(__dirname,'/frontend/dist')))
app.get('/{*splat}', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT,()=>{console.log('server is running')});