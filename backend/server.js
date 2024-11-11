import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";

//init app
const app = express();

//configure to access environment file
dotenv.config();

//connect DataBase
connectDB();

//req body read middleware
app.use(express.json());

//req cookie read middleware
app.use(cookieParser());

//routes
app.use("/api/auth", userRoutes);
app.use("/api/task", taskRoutes);

//server port
const port = process.env.PORT;

//server listener
app.listen(port, () =>
  console.log(`Server is running on port ${port}
    http://localhost:${port}
    `)
);
