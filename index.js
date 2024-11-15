import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbConnect from "./config/database.js";
import User from "./models/user.js";
import {createAdmin,createAlumni,createStudent,getAllUsers} from "./controllers/userController.js";
import { createCompany, getCompanies } from "./controllers/companyController.js";
import { createReview,getAllReviews } from "./controllers/reviewController.js";
import { likeReviews } from "./controllers/likeController.js";
import router from "./routes/feedbackRoutes.js";

const app=express();
const PORT=3000;

app.use(express.json());

dotenv.config();

dbConnect();
app.use("/api/v1",router)
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
