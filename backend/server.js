import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";


import messageRoutes from "./routes/messageRoutes.js";

dotenv.config();

const app = express();

connectDB();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Portfolio API is running",
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});