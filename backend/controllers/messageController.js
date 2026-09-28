import Message from "../models/Message.js";
import nodemailer from "nodemailer";
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
        user: process.env.SMPT_EMAIL,
        pass: process.env.SMPT_PASSWORD,
    },
});

export const createMessage = async (req, res) => {
    try {
        const { name, whatsapp, message } = req.body;

        // Validation
        if (!name || !whatsapp || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, WhatsApp number and message are required",
            });
        }

        // Save message in MongoDB
        const newMessage = await Message.create({
            name,
            whatsapp,
            message,
        });

        // Send email
        await transporter.sendMail({
            from: process.env.SMPT_EMAIL,

            to: process.env.SMPT_EMAIL,

            subject: `New Portfolio Inquiry from ${name}`,

            html: `
                <div style="
                    font-family: Arial, sans-serif;
                    max-width: 600px;
                    margin: auto;
                    padding: 30px;
                    background: #f5f5f5;
                ">

                    <div style="
                        background: #1f2024;
                        padding: 25px;
                        border-radius: 12px;
                        color: white;
                    ">

                        <h2 style="
                            margin: 0;
                            color: #ff014f;
                        ">
                            New Portfolio Inquiry
                        </h2>

                        <p style="
                            color: #cccccc;
                            margin-top: 10px;
                        ">
                            Someone contacted you through your portfolio.
                        </p>

                    </div>

                    <div style="
                        background: white;
                        margin-top: 15px;
                        padding: 25px;
                        border-radius: 12px;
                    ">

                        <p>
                            <strong>Name:</strong>
                            ${name}
                        </p>

                        <p>
                            <strong>WhatsApp:</strong>
                            ${whatsapp}
                        </p>

                        <p>
                            <strong>Message:</strong>
                        </p>

                        <div style="
                            background: #f5f5f5;
                            padding: 15px;
                            border-radius: 8px;
                            color: #333;
                        ">
                            ${message}
                        </div>

                    </div>

                </div>
            `,
        });

     
        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: newMessage,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const getMessages = async (req, res) => {
    try {
        const messages = await Message
            .find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            messages,
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};